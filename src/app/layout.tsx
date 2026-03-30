import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/lib/i18n';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lenny Career Coach — Resume Review, Career Advice & Mock Interviews',
  description:
    'AI career coach grounded in 314 podcast episodes and 349 newsletter articles from Lenny Rachitsky. Every answer cites real content — not generic AI advice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-bg-primary text-text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
