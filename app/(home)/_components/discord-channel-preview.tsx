import Image from 'next/image';
import type { ReactNode } from 'react';

type DiscordChannelPreviewProps = {
  channelName: string;
  children: ReactNode;
};

type DiscordBotMessageProps = {
  children: ReactNode;
};

type DiscordCommandInvocationProps = {
  command: string;
  userName: string;
};

export function DiscordChannelPreview({
  channelName,
  children,
}: DiscordChannelPreviewProps) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#1e1f22] bg-[#313338] shadow-2xl">
      <div className="flex min-h-12 items-center gap-2 border-b border-[#1e1f22] bg-[#232428] px-4 text-sm font-semibold text-[#f2f3f5]">
        <span className="text-xl font-normal text-[#b5bac1]">#</span>
        <span>{channelName}</span>
      </div>
      {children}
    </div>
  );
}

export function DiscordCommandInvocation({
  command,
  userName,
}: DiscordCommandInvocationProps) {
  return (
    <div className="flex items-center gap-2 px-4 pb-1 pt-5 text-sm text-[#b5bac1] sm:px-5">
      <span className="relative size-6 shrink-0 overflow-hidden rounded-full bg-[#06121e]">
        <Image
          src="/images/c0bra-avatar.webp"
          alt=""
          width={128}
          height={128}
          className="size-6 object-cover"
        />
      </span>
      <span>
        <span className="font-medium text-[#dbdee1]">{userName}</span> used{' '}
        <span className="rounded bg-[#5865f2] px-1.5 py-0.5 font-medium text-white">
          /{command}
        </span>
      </span>
    </div>
  );
}

export function DiscordBotMessage({ children }: DiscordBotMessageProps) {
  return (
    <div className="grid grid-cols-[42px_minmax(0,1fr)] gap-3 px-4 pb-5 pt-2 text-[#f2f3f5] sm:px-5">
      <Image
        src="/images/battlerite-logo.png"
        alt=""
        width={42}
        height={42}
        className="size-[42px] rounded-full object-contain"
      />

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-semibold text-white">BattleVive Bot</span>
          <span className="rounded-[3px] bg-discord px-1 py-0.5 text-[10px] font-bold uppercase leading-none text-white">
            APP
          </span>
          <span className="text-[11px] text-[#b5bac1]">Today at 20:42</span>
        </div>

        {children}
      </div>
    </div>
  );
}
