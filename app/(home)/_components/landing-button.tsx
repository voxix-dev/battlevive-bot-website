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
      ? 'rounded-md bg-battlevive-gradient px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90'
      : 'border border-fd-border bg-fd-card text-fd-foreground shadow-sm hover:bg-fd-muted';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
