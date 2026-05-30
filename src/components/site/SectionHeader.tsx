import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "ink" | "cream";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "ink",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 items-start",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "tag-pill",
            tone === "cream" &&
              "border-cream/25 bg-transparent text-cream/70",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-balance",
          tone === "cream" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base md:text-lg",
            tone === "cream" ? "text-cream/70" : "text-ink/65",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
