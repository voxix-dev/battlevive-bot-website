'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

type ScrollIndicatorProps = {
  targetId: string;
};

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById(targetId);

    if (!target || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsVisible(!entry.isIntersecting);
        }
      },
      {
        rootMargin: '-18% 0px -24% 0px',
        threshold: 0.08,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-3 flex flex-col items-center gap-2 text-fd-muted-foreground transition-[opacity,transform] duration-500 sm:bottom-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">
        Scroll to explore
      </span>
      <span className="flex size-9 items-center justify-center rounded-full border border-fd-border bg-fd-card/80 shadow-sm backdrop-blur-sm motion-safe:animate-bounce">
        <ChevronDown className="size-4" />
      </span>
    </div>
  );
}
