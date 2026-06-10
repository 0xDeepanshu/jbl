import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  accentText?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  title,
  accentText,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "flex gap-3",
        align === "center" ? "flex-col items-center text-center" : "items-baseline text-left"
      )}
    >
      <h2
        className={clsx(
          "font-oswald font-bold uppercase",
          accentText ? "text-4xl" : "text-5xl text-white"
        )}
      >
        {title}
      </h2>
      {accentText && (
        <span className="font-oswald text-lg uppercase tracking-widest text-[#FF5A00] shrink-0">
          {accentText}
        </span>
      )}
    </div>
  );
}
