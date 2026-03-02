import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "케이스 스터디 | JeongSu Kim",
  description: "왜, 어떻게 했는가를 보여주는 케이스 스터디",
};

export default function CaseStudyListPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <h2 className="text-3xl font-bold sm:text-4xl">케이스 스터디</h2>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        이력서에서 &quot;무엇을 했는가&quot;를 보여준다면, 여기서는 &quot;왜,
        어떻게 했는가&quot;를 보여줍니다.
      </p>

      <div className="mt-10 space-y-4">
        {studies.map((study) => (
          <Link key={study.slug} href={`/case-study/${study.slug}`}>
            <Card className="group transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  {study.title}
                </CardTitle>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {study.subtitle}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                  <span className="text-xs text-muted-foreground/60">
                    {study.date}
                  </span>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <footer className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; 2026 JeongSu Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
