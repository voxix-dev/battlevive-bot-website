import Image from 'next/image';
import {
  DiscordBotMessage,
  DiscordChannelPreview,
  DiscordCommandInvocation,
} from './discord-channel-preview';

export function DiscordRankPreview() {
  return (
    <DiscordChannelPreview channelName="rank-cards">
      <DiscordCommandInvocation command="rank" userName="c0bra" />
      <DiscordBotMessage>
        <div className="relative aspect-[640/220] w-full overflow-hidden rounded-lg border border-[#1e1f22] bg-[#06121e]">
          <Image
            src="/images/rank-card.png"
            alt="Example BattleVive current-season rank card"
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-contain"
          />
        </div>
      </DiscordBotMessage>
    </DiscordChannelPreview>
  );
}
