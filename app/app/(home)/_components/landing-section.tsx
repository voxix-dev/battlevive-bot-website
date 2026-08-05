import type { ReactNode } from 'react';

type LandingSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function LandingSection({
  children,
  className = '',
  id,
}: LandingSectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-fd-border px-5 py-20 sm:px-8 sm:py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}
