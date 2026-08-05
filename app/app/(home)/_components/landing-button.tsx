import Link from 'next/link';
import type { ReactNode } from 'react';

type LandingButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
};

export function LandingButton({
  children,
  href,
  variant = 'primary',
}: LandingButtonProps) {
  const baseClasses =
    'inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition duration-150 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background';

  const variantClasses =
    variant === 'primary'
      ? 'border border-battlevive bg-battlevive-gradient text-white shadow-[0_5px_16px_color-mix(in_srgb,var(--color-battlevive)_22%,transparent)] hover:brightness-105'
      : 'border border-fd-border bg-fd-card text-fd-foreground shadow-sm hover:bg-fd-muted';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
