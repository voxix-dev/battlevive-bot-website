import Image from 'next/image';

export function DiscordRankPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1e1f22] bg-[#313338] shadow-2xl">
      <div className="flex min-h-12 items-center gap-2 border-b border-[#1e1f22] bg-[#232428] px-4 text-sm font-semibold text-[#f2f3f5]">
        <span className="text-xl font-normal text-[#b5bac1]">#</span>
        <span>rank-cards</span>
      </div>

      <div className="grid grid-cols-[42px_minmax(0,1fr)] gap-3 px-4 py-5 text-[#f2f3f5] sm:px-5">
        <Image
          src="/images/battlevive-logo.png"
          alt="BattleVive Bot avatar"
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

          <p className="mb-3 mt-1 text-sm text-[#dbdee1]">
            Current-season rank card
          </p>

          <div className="relative aspect-[640/220] w-full overflow-hidden rounded-lg border border-[#1e1f22] bg-[#06121e]">
            <Image
              src="/images/rank-card.png"
              alt="Example BattleVive current-season rank card"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
