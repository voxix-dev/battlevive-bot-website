'use client';

import Image from 'next/image';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  DiscordBotMessage,
  DiscordChannelPreview,
} from './discord-channel-preview';

type ShowcaseImage = {
  height: number;
  src: string;
  width: number;
};

export type TabbedImageShowcaseItem = {
  accessibilityText: string;
  caption: string;
  id: string;
  image?: ShowcaseImage;
  tabLabel: string;
};

type TabbedImageShowcaseProps = {
  channelName: string;
  initialSelectedId: TabbedImageShowcaseItem['id'];
  items: TabbedImageShowcaseItem[];
};

export function TabbedImageShowcase({
  channelName,
  initialSelectedId,
  items,
}: TabbedImageShowcaseProps) {
  const componentId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [selectedId, setSelectedId] = useState(initialSelectedId);
  const selectedItem =
    items.find((item) => item.id === selectedId) ?? items[0];

  if (!selectedItem) {
    return null;
  }

  function selectTab(index: number) {
    const item = items[index];

    if (!item) {
      return;
    }

    setSelectedId(item.id);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;

    switch (event.key) {
      case 'ArrowLeft':
        nextIndex = (index - 1 + items.length) % items.length;
        break;
      case 'ArrowRight':
        nextIndex = (index + 1) % items.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectTab(nextIndex);
  }

  return (
    <div className="min-w-0">
      <div
        role="tablist"
        aria-label="Active lobby examples"
        className="mb-4 flex max-w-full gap-3 overflow-x-auto py-1"
      >
        {items.map((item, index) => {
          const isSelected = item.id === selectedItem.id;

          return (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`${componentId}-${item.id}-tab`}
              type="button"
              role="tab"
              aria-controls={`${componentId}-${item.id}-panel`}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`flex min-h-11 min-w-36 flex-1 shrink-0 items-center justify-center px-5 text-sm font-semibold transition duration-150 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background ${isSelected ? 'rounded-md bg-battlevive text-white shadow-sm hover:opacity-90' : 'rounded-lg border border-fd-border bg-fd-card text-fd-foreground shadow-sm hover:bg-fd-muted'}`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <DiscordChannelPreview channelName={channelName}>
        <DiscordBotMessage>
          {items.map((item) => {
            const isSelected = item.id === selectedItem.id;

            return (
              <figure
                key={item.id}
                id={`${componentId}-${item.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${componentId}-${item.id}-tab`}
                tabIndex={0}
                hidden={!isSelected}
                className={`min-h-60 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a478ff] ${isSelected ? 'block' : 'hidden'}`}
              >
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.accessibilityText}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="h-auto max-h-[30rem] w-auto max-w-full rounded-md"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={item.accessibilityText}
                    className="flex min-h-48 w-full items-center justify-center rounded-lg border border-dashed border-[#4e5058] px-6 text-center"
                  >
                    <p className="text-sm font-medium text-[#b5bac1]">
                      Screenshot coming soon
                    </p>
                  </div>
                )}
                <figcaption className="sr-only">{item.caption}</figcaption>
              </figure>
            );
          })}
        </DiscordBotMessage>
      </DiscordChannelPreview>
    </div>
  );
}
