import Image from 'next/image';
import {
  DiscordBotMessage,
  DiscordChannelPreview,
} from './discord-channel-preview';

export function DiscordLeaderboardPreview() {
  return (
    <DiscordChannelPreview channelName="leaderboards">
      <DiscordBotMessage>
        <Image
          src="/images/leaderboard.png"
          alt="BattleVive current-season leaderboard posted by BattleVive Bot"
          width={1280}
          height={1548}
          sizes="(max-width: 1024px) 100vw, 680px"
          className="h-auto max-h-[34rem] w-auto max-w-full rounded-lg object-contain object-left-top"
        />
      </DiscordBotMessage>
    </DiscordChannelPreview>
  );
}
