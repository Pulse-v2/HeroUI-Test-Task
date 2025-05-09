import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Довідник мемів',
  description: 'Довідник популярних мемів',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-900 text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
