#!/usr/bin/env node
/**
 * Resume → Notion 동기화 스크립트 (PDF 제출용)
 *
 * page.tsx의 이력서 데이터를 Notion 페이지에 동기화합니다.
 * PDF 내보내기 시 담당자가 보기 좋은 형식으로 최적화되어 있습니다.
 *
 * 사용법:
 *   pnpm notion-sync
 *
 * 환경변수 (.env.local):
 *   NOTION_TOKEN     — Notion Internal Integration 토큰
 *   NOTION_PAGE_ID   — 동기화할 Notion 페이지 ID
 *
 * ─── 디자인 원칙 (2025 Notion 이력서 트렌드 기반) ───
 *
 * 1. 색상 최소화
 *    - 모노크롬 베이스 + gray 보조색만 사용 (컬러풀한 라벨/배경 금지)
 *    - 2-3색 이내: 기본 검정(본문) + gray(보조 정보) + bold(강조)
 *
 * 2. PDF 최적화
 *    - 토글 블록 사용 금지 (PDF에서 접힌 채로 출력됨)
 *    - 빈 줄 최소화로 정보 밀도 높게 유지
 *    - Notion → PDF 내보내기 시 그대로 제출 가능한 형태
 *
 * 3. 구조
 *    - H1: 섹션 (Experience, Projects, Skills 등)
 *    - H2: 회사명 + 재직 기간
 *    - H3: 프로젝트명 (serviceClosed 표시 안 함 — 채용 담당자에게 불필요)
 *    - 기여 범위: 불릿 리스트
 *    - 성과: 불릿이 아닌 한 줄 paragraph, 수치만 bold 강조
 *    - quote: 회사 설명 (gray, 한 줄)
 *    - divider: 회사 간 구분
 *
 * 4. 콘텐츠 원칙
 *    - 기능 나열이 아닌 가치/임팩트 중심 서술
 *    - 패키지 매니저·번들러·저수준 도구는 tech에서 제외
 *    - 유사한 subProject는 통합하여 간결하게
 *    - 오래된 경력은 축약, 최근 경력에 비중
 *    - 성과에서 수치(%, 초, 명 등)만 bold 처리
 *
 * 5. 운영 절차
 *    - 실행 전 사용자에게 노션 페이지 기존 내용 삭제를 요청할 것
 *    - API 삭제는 느리므로 사용자가 직접 삭제하는 것이 빠름
 *    - 삭제 완료 확인 후 `pnpm notion-sync` 실행
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Load .env.local ────────────────────────────────────────

function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env.local");
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch { /* no .env.local */ }
}

loadEnv();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const PAGE_ID = process.env.NOTION_PAGE_ID;
const API = "https://api.notion.com/v1";
const HEADERS = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

if (!NOTION_TOKEN || !PAGE_ID) {
  console.error("환경변수가 필요합니다. .env.local 파일에 설정하거나 직접 전달하세요:");
  console.error("  NOTION_TOKEN=xxx NOTION_PAGE_ID=yyy pnpm notion-sync");
  process.exit(1);
}

// ─── Extract Resume Data from page.tsx ──────────────────────

function extractResumeData() {
  const pagePath = resolve(__dirname, "../src/app/page.tsx");
  const source = readFileSync(pagePath, "utf-8");

  const careersMatch = source.match(/const careers = (\[[\s\S]*?\n\];)/);
  const projectsMatch = source.match(/const projects = (\[[\s\S]*?\n\];)/);
  const skillsMatch = source.match(/const skills = (\[[\s\S]*?\n\];)/);

  if (!careersMatch || !projectsMatch || !skillsMatch) {
    console.error("page.tsx에서 데이터를 추출할 수 없습니다.");
    process.exit(1);
  }

  const careers = new Function(`return ${careersMatch[1]}`)();
  const projects = new Function(`return ${projectsMatch[1]}`)();
  const skills = new Function(`return ${skillsMatch[1]}`)();

  const introMatch = source.match(/<p className="pl-1">\s*([\s\S]*?)\s*<\/p>/);
  const intro = introMatch ? introMatch[1].replace(/\s+/g, " ").trim() : "";

  return { careers, projects, skills, intro };
}

// ─── Notion Block Helpers ───────────────────────────────────

function rt(content, opts = {}) {
  const r = { type: "text", text: { content } };
  const a = {};
  if (opts.bold) a.bold = true;
  if (opts.italic) a.italic = true;
  if (opts.code) a.code = true;
  if (opts.color) a.color = opts.color;
  if (opts.link) r.text.link = { url: opts.link };
  if (Object.keys(a).length) r.annotations = a;
  return r;
}

const h1 = (t) => ({ type: "heading_1", heading_1: { rich_text: [].concat(t), color: "default" } });
const h2 = (t) => ({ type: "heading_2", heading_2: { rich_text: [].concat(t), color: "default" } });
const h3 = (t) => ({ type: "heading_3", heading_3: { rich_text: [].concat(t), color: "default" } });
const p = (t, color = "default") => ({ type: "paragraph", paragraph: { rich_text: [].concat(t), color } });
const bullet = (t) => ({ type: "bulleted_list_item", bulleted_list_item: { rich_text: [].concat(t), color: "default" } });
const divider = () => ({ type: "divider", divider: {} });
const empty = () => p([rt("")]);

// 수치 패턴을 찾아 볼드 처리 (예: 650명, 3분 5초 → 2분 57초, 34%, 93.28%)
function highlightNumbers(text) {
  const pattern = /(\d+\.?\d*\s*[%초분명건개PCS만]+(?:\s*→\s*\d+\.?\d*\s*[%초분명건개PCS만]+)?)|(\d+\.?\d*%\s*수준)|(\d+[만명건개]+\s*(?:규모|이상|사용자|대상))/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(rt(text.slice(lastIndex, match.index)));
    }
    parts.push(rt(match[0], { bold: true }));
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(rt(text.slice(lastIndex)));
  }

  return parts.length ? parts : [rt(text)];
}

// ─── Build Blocks (PDF-optimized) ───────────────────────────

function buildSubProjectBlocks(sub, isFirst) {
  const blocks = [];

  if (!isFirst) blocks.push(empty());

  // Title line: name + period
  blocks.push(p([
    rt(sub.name, { bold: true }),
    rt(`  |  ${sub.period}`, { color: "gray" }),
  ]));

  // Role (inline)
  blocks.push(p([rt(sub.role, { color: "gray" })]));

  // Contributions as bullets
  for (const c of sub.contributions) {
    blocks.push(bullet([rt(c)]));
  }

  // Achievements — 수치만 볼드 강조
  if (sub.achievements?.length) {
    const parts = [rt("성과  ", { bold: true, color: "gray" })];
    for (let i = 0; i < sub.achievements.length; i++) {
      if (i > 0) parts.push(rt("  |  ", { color: "gray" }));
      parts.push(...highlightNumbers(sub.achievements[i]));
    }
    blocks.push(p(parts));
  }

  return blocks;
}

function buildProjectBlocks(item) {
  const blocks = [];

  // Project name
  const titleParts = [];
  if (item.url) {
    titleParts.push(rt(item.name, { bold: true, link: item.url }));
  } else {
    titleParts.push(rt(item.name, { bold: true }));
  }
  blocks.push(h3(titleParts));

  // Description + Tech (한 줄씩)
  blocks.push(p([rt(item.description, { color: "gray" })]));
  blocks.push(p([rt(item.tech.join(" · "), { color: "gray", italic: true })]));

  // Sub-projects
  for (let i = 0; i < item.subProjects.length; i++) {
    blocks.push(...buildSubProjectBlocks(item.subProjects[i], i === 0));
  }

  return blocks;
}

function buildAllBlocks(data) {
  const { careers, projects, skills, intro } = data;
  const blocks = [];

  // ── Header ──
  blocks.push(h1([rt("김정수  JeongSu Kim")]));
  blocks.push(p([rt(intro)]));
  blocks.push(divider());

  // ── Experience (compact table-like) ──
  blocks.push(h2([rt("경력")]));
  for (const c of careers) {
    blocks.push(p([
      rt(c.company, { bold: true }),
      rt(`  ${c.role}`, {}),
      rt(`  |  ${c.period}`, { color: "gray" }),
    ]));
  }
  blocks.push(divider());

  // ── Projects ──
  blocks.push(h2([rt("프로젝트")]));

  for (const group of projects) {
    const career = careers.find(c => c.company === group.company);

    // Company header
    blocks.push(h2([
      rt(`${group.company}`, { bold: true }),
      career ? rt(`  |  ${career.role}  |  ${career.period}`, { color: "gray" }) : rt(""),
    ]));
    blocks.push(p([rt(group.companyDescription, { italic: true, color: "gray" })]));

    // Projects
    for (const item of group.items) {
      blocks.push(...buildProjectBlocks(item));
      blocks.push(empty());
    }

    blocks.push(divider());
  }

  // ── Skills (compact grid) ──
  blocks.push(h2([rt("기술 스택")]));
  for (const s of skills) {
    blocks.push(p([
      rt(`${s.category}  `, { bold: true }),
      rt(s.items.join(" · ")),
    ]));
  }
  blocks.push(divider());

  // ── Education ──
  blocks.push(h2([rt("학력")]));
  blocks.push(p([rt("서일대학교  "), rt("컴퓨터공학 학사 졸업", { color: "gray" })]));

  // ── ETC ──
  blocks.push(h2([rt("기타")]));
  blocks.push(p([rt("육군 병장 만기 전역  "), rt("2011.06 - 2013.03", { color: "gray" })]));
  blocks.push(p([rt("정보처리산업기사  "), rt("2017.05.26", { color: "gray" })]));

  return blocks;
}

// ─── Notion API ─────────────────────────────────────────────

async function clearPage(pageId) {
  console.log("기존 블록 삭제 중...");
  let allIds = [];
  let cursor;
  do {
    const url = `${API}/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`;
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) break;
    const data = await res.json();
    allIds.push(...data.results.map(b => b.id));
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);

  if (!allIds.length) { console.log("  비어있음"); return; }
  console.log(`  ${allIds.length}개 블록 삭제...`);

  for (let i = 0; i < allIds.length; i += 10) {
    const batch = allIds.slice(i, i + 10);
    await Promise.all(batch.map(id =>
      fetch(`${API}/blocks/${id}`, { method: "DELETE", headers: HEADERS })
    ));
  }
}

async function appendBlocks(pageId, blocks) {
  for (let i = 0; i < blocks.length; i += 100) {
    const chunk = blocks.slice(i, i + 100);
    const num = Math.floor(i / 100) + 1;
    const total = Math.ceil(blocks.length / 100);
    console.log(`  블록 전송 ${num}/${total} (${chunk.length}개)...`);

    const res = await fetch(`${API}/blocks/${pageId}/children`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({ children: chunk }),
    });
    if (!res.ok) {
      const err = await res.json();
      console.error("Error:", JSON.stringify(err, null, 2));
      process.exit(1);
    }
  }
}

// ─── Main ───────────────────────────────────────────────────

async function main() {
  console.log("page.tsx에서 이력서 데이터 추출...");
  const data = extractResumeData();
  console.log(`  경력 ${data.careers.length}개, 프로젝트 그룹 ${data.projects.length}개`);

  await clearPage(PAGE_ID);

  const blocks = buildAllBlocks(data);
  console.log(`Notion 동기화 (${blocks.length}개 블록)...`);
  await appendBlocks(PAGE_ID, blocks);

  console.log("완료!");
}

main().catch(err => { console.error(err); process.exit(1); });
