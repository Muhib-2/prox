import { redirect } from 'next/navigation';

export default function About({ params: { locale } }) {
  redirect(`/${locale}/who-we-are`);
  return null;
}
