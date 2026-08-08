'use client';

import {
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

export function Reveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      const animationFrame = requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-18% 0px -24% 0px',
        threshold: 0.08,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const revealClasses = [
    'reveal',
    isVisible ? 'reveal-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={elementRef}
      className={revealClasses}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
