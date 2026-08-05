import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/battlerite-logo.png"
            alt="BattleVive Bot logo"
            width={28}
            height={28}
            className="size-7"
          />

          <span className="font-semibold text-battlevive-purple">
            {appName}
          </span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}