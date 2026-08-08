import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { AddBotButton } from '@/components/add-bot-button';
import  { baseOptions } from '@/lib/layout.shared';

interface LayoutProps {
  children: ReactNode;
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.984 1.03-2.683-.103-.253-.446-1.269.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.833a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.203 2.394.1 2.647.641.699 1.028 1.591 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

export default function Layout({ children }: LayoutProps) {
  const {
    githubUrl,
    links = [],
    ...homeOptions
  } = baseOptions();

  if (!githubUrl) {
    throw new Error('GitHub URL is missing from base layout options.');
  }

  return (
    <HomeLayout
      {...homeOptions}
      links={[
        ...links,
        {
          type: 'icon',
          label: 'GitHub',
          text: 'GitHub',
          url: githubUrl,
          icon: <GitHubIcon />,
        },
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