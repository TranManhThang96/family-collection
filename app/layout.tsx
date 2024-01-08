import type { Metadata } from 'next';
import clsx from 'clsx';
import '@/styles/globals.css';
import { inter } from '@/components/Fonts';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Family Collection',
  description: 'My family photo collection inspired by pixabay',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
