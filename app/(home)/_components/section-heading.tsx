type SectionHeadingProps = {
  description: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-xl">
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-battlevive">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-fd-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
