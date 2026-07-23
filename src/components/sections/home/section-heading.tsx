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
      <h2 className="section-title text-[clamp(2.2rem,4.8vw,4.2rem)]">{title}</h2>
      <p className="section-copy max-w-[44rem]">{description}</p>
    </div>
  );
}
