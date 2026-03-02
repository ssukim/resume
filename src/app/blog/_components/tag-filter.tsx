"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export function TagFilter({ tags }: { tags: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("tag");

  const allTags = ["전체", ...tags];

  const onSelect = (tag: string) => {
    if (tag === "전체") {
      router.push(pathname);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tag", tag);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => {
        const isActive =
          (tag === "전체" && !selected) || selected === tag;
        return (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
