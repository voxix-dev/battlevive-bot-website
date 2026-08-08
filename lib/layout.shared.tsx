import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { AddBotButton } from '@/components/add-bot-button';
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

          <span className="font-bold text-foregound ">
            {appName}
          </span>
        </div>
      ),
    },

    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}