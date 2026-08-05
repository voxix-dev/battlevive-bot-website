import { redirect } from 'next/navigation';

export default function AddBotPage() {
  redirect(
    'https://discord.com/oauth2/authorize?client_id=1532431219537477733&permissions=268692544&integration_type=0&scope=bot'
  );
}