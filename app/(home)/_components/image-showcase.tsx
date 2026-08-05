import Image from 'next/image';

type ImageShowcaseProps = {
  alt: string;
  caption: string;
  src: string;
};

export function ImageShowcase({ alt, caption, src }: ImageShowcaseProps) {
  return (
    <figure className="rounded-xl border border-fd-border bg-fd-card p-2.5 shadow-2xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-fd-muted">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 700px"
          className="object-contain"
        />
      </div>
      <figcaption className="px-1 pt-3 text-xs text-fd-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
