import Image from 'next/image';

export function DiscordProfilePreview() {
  return (
    <figure className="flex justify-center lg:justify-start">
      <Image
        src="/images/ranks-discord-profile.png"
        alt="Discord player profile showing BattleVive rank and community roles"
        width={300}
        height={481}
        sizes="(max-width: 640px) 80vw, 300px"
        className="h-auto max-h-[31rem] w-auto max-w-full rounded-xl shadow-2xl"
      />
    </figure>
  );
}
