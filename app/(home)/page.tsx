import { Reveal } from '@/components/reveal';
import { DiscordLeaderboardPreview } from './_components/discord-leaderboard-preview';
import { DiscordProfilePreview } from './_components/discord-profile-preview';
import { DiscordRankPreview } from './_components/discord-rank-preview';
import { LandingButton } from './_components/landing-button';
import { LandingSection } from './_components/landing-section';
import { ScrollIndicator } from './_components/scroll-indicator';
import { SectionHeading } from './_components/section-heading';
import {
  TabbedImageShowcase,
  type TabbedImageShowcaseItem,
} from './_components/tabbed-image-showcase';

const activeLobbyShowcaseItems: TabbedImageShowcaseItem[] = [
  {
    id: 'no-lobbies',
    tabLabel: 'No lobbies',
    caption: 'A clear empty state between games',
    accessibilityText:
      'Discord active-lobbies channel showing the BattleVive Bot empty-state message: There are no active lobbies right now.',
    image: {
      src: '/images/active-lobbies-no-lobbies.png',
      width: 261,
      height: 79,
    },
  },
  {
    id: 'open-spots',
    tabLabel: 'Open spots',
    caption: 'Open roster spots visible at a glance',
    accessibilityText:
      'Discord active-lobbies channel showing a BattleVive lobby waiting for players, with open roster spots.',
    image: {
      src: '/images/active-lobbies-not-full.png',
      width: 163,
      height: 128,
    },
  },
  {
    id: 'draft-in-progress',
    tabLabel: 'Draft in progress',
    caption: 'Draft progress kept visible in Discord',
    accessibilityText:
      'Discord active-lobbies channel showing a fully drafted BattleVive lobby with the draft in progress.',
    image: {
      src: '/images/active-lobbies-all-picks.png',
      width: 355,
      height: 233,
    },
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-fd-background text-fd-foreground">
      <LandingSection className="relative overflow-hidden pb-48 pt-32 sm:pb-56 sm:pt-40 lg:pb-64 lg:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-battlevive)_12%,transparent),transparent)]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-battlevive sm:text-sm">
            BattleVive competition, inside Discord
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Your BattleVive season,{' '}
            <span className="battlevive-gradient-text">
              where your community plays.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-fd-muted-foreground sm:text-xl">
            Ranked roles, current-season leaderboards, and BattleVive tools
            built directly into Discord.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <LandingButton href="/add-bot" target= "_blank">Add Bot</LandingButton>
            <LandingButton href="/docs" variant="secondary">
              Read the docs
            </LandingButton>
          </div>
        </div>

        <ScrollIndicator targetId="rank-card" />
      </LandingSection>
      <Reveal>
        <LandingSection id="rank-card">
          <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <SectionHeading
              eyebrow="Current-season rank cards"
              title="Show each player where they stand."
              description="Generate a clear rank card for the current BattleVive season, ready to post directly in Discord."
            />
            <DiscordRankPreview />
          </div>
        </LandingSection>
      </Reveal>
      <Reveal>
        <LandingSection id="rank-roles">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <DiscordProfilePreview />
            <SectionHeading
              eyebrow="Synchronized rank roles"
              title="Make every rank part of the profile."
              description="Keep BattleVive rank and community roles visible on each player's Discord profile, automatically reflecting where they belong."
            />
          </div>
        </LandingSection>
      </Reveal>
      <Reveal>
        <LandingSection id="leaderboards">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="Current-season leaderboards"
              title="Keep the competition visible."
              description="Give your community a readable season overview with player placement, rank, MMR, wins, losses, and win rate."
            />
            <DiscordLeaderboardPreview />
          </div>
        </LandingSection>
      </Reveal>
      <Reveal>
        <LandingSection id="active-lobbies">
          <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <SectionHeading
              eyebrow="Active lobby channel"
              title="Every active lobby, one channel."
              description="Keep open spots, teams, draft progress, and match status visible in Discord, with a clear empty state between games."
            />
            <TabbedImageShowcase
              channelName="active-lobbies"
              items={activeLobbyShowcaseItems}
              initialSelectedId="no-lobbies"
            />
          </div>
        </LandingSection>
      </Reveal>
    </main>
  );
}
