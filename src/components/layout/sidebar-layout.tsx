"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  PenLine,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const isResume = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  return (
    <div className="flex h-full flex-col px-5 py-6">
      {/* Profile */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            JS
          </div>
          <h1 className="text-lg font-bold text-foreground">
            JeongSu Kim
          </h1>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Product Engineer</p>
        <p className="mt-1 text-xs text-muted-foreground/70">AI와 함께 제품을 만드는</p>
        <p className="mt-2 text-xs text-muted-foreground/50">
          Last Updated. 2026/03/02
        </p>
      </div>

      <Separator className="my-5" />

      {/* Navigation */}
      <nav className="space-y-1">
        <Link
          href="/"
          onClick={onNavigate}
          className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            isResume
              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          이력서
        </Link>
        <Link
          href="/blog"
          onClick={onNavigate}
          className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            isBlog
              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <PenLine className="h-4 w-4" />
          블로그
        </Link>
      </nav>

      <Separator className="my-5" />

      {/* Core Skills */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Core Skills
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Claude Code</Badge>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      <Separator className="mb-4" />

      {/* Contact */}
      <div className="pb-2 space-y-1">
        <a
          href="tel:010-8743-9512"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
        >
          <Phone className="h-4 w-4" />
          010-8743-9512
        </a>
        <a
          href="mailto:ssukim0930@gmail.com"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          ssukim0930@gmail.com
        </a>
      </div>
    </div>
  );
}

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Top Bar */}
      <div className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-sidebar px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="rounded-md p-2 hover:bg-sidebar-accent"
          aria-label={sidebarOpen ? "사이드바 닫기" : "사이드바 열기"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
        <span className="text-lg font-semibold text-foreground">
          JeongSu Kim
        </span>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:z-auto`}
      >
        <div className="h-full pt-14 lg:pt-0">
          <SidebarContent onNavigate={handleNavigate} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 lg:h-screen lg:overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
