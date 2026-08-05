import Link from 'next/link';

export function AddBotButton() {
  return (
    <Link
      href="/add-bot"
      className="rounded-md bg-battlevive-gradient px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      target="_blank"
    >
      Add Bot
    </Link>
  );
}