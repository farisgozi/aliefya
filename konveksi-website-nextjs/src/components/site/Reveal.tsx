"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Tag = "div" | "section" | "article" | "li";

type Props = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
