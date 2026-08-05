import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { AddBotButton } from '@/components/add-bot-button';
import { baseOptions } from '@/lib/layout.shared';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const options = baseOptions();

  return (
    <HomeLayout
      {...options}
      links={[
        ...(options.links ?? []),
        {
          type: 'custom',
          secondary: true,
          children: <AddBotButton />,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}