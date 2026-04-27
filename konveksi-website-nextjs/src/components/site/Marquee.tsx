import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
  separator?: string;
};

export default function Marquee({
  items,
  reverse = false,
  className,
  separator = "✺",
}: Props) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {item}
          <span aria-hidden className="text-clay">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
