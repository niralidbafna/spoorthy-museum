import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OUR LITTLE UNIVERSE',
  description: 'A private memory universe of friendship and moments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
