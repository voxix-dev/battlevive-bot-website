import { Reveal } from '@/components/reveal';
import { DiscordRankPreview } from './_components/discord-rank-preview';
import { ImageShowcase } from './_components/image-showcase';
import { LandingButton } from './_components/landing-button';
import { LandingSection } from './_components/landing-section';
import { SectionHeading } from './_components/section-heading';

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-fd-background text-fd-foreground">
      <LandingSection className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
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
        <LandingSection id="leaderboards">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <ImageShowcase
              src="/images/leaderboard.png"
              alt="BattleVive season leaderboard"
              caption="BattleVive current-season leaderboard"
            />
            <SectionHeading
              eyebrow="Current-season leaderboards"
              title="Keep the competition visible."
              description="Give your community a readable season overview with player placement, rank, MMR, wins, losses, and win rate."
            />
          </div>
        </LandingSection>
      </Reveal>
    </main>
  );
}
