type SectionHeadingProps = {
  eyebrow: string;

  title: string;

  description?: string;

  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {/* Small Label */}

      <span className="eyebrow">{eyebrow}</span>

      {/* Main Heading */}

      <h2 className="section-title">{title}</h2>

      {/* Description */}

      {description && (
        <p
          className={isCenter ? "section-subtitle mx-auto" : "section-subtitle"}
        >
          {description}
        </p>
      )}
    </div>
  );
}
