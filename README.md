# BattleVive Bot website

The website and documentation hub for
[BattleVive Bot](https://github.com/voxix-dev/battlevive-bot), a Discord bot
that brings BattleVive competition directly into community servers.

The site introduces the bot's player rank cards, synchronized Discord roles,
season leaderboards, and active-lobby channel. The documentation covers setup,
configuration, commands, deployment, and development of the bot itself.

## Stack

- Next.js 16 and React
- TypeScript
- Tailwind CSS
- Fumadocs and MDX
- Static export hosted on Cloudflare

## Repository layout

- `app/(home)/` contains the landing page and its presentation components.
- `app/docs/` contains the documentation routes and layouts.
- `content/docs/` contains the documentation source in MDX.
- `components/` contains shared interface components.
- `lib/` contains shared content, source, and layout helpers.
- `public/images/` contains screenshots and other static artwork.

Documentation changes should be made in the corresponding file under
`content/docs/`. Landing-page screenshots can be replaced in `public/images/`;
when their dimensions change, update the explicit image metadata in the
component that displays them so they retain the correct aspect ratio.

The project is statically exported. `.next/`, `.source/`, `out/`, and
`.wrangler/` are generated directories and are not source files.
