import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'THE MUSEUM OF US',
  description: 'A private exhibition of friendship and memories.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
