type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`section-header ${alignment}`}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="type-h2">{title}</h2>
      <p className="section-copy max-w-3xl">{description}</p>
    </div>
  );
}
