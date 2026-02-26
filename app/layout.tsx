import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RouteAwareLayout from '../components/RouteAwareLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coop AKNOUL - TAINASTE',
  description:
    "Annuaire et mini-marketplace des coopératives des zones AKNOUL et TAINASTE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-fond`} suppressHydrationWarning>
        <RouteAwareLayout>{children}</RouteAwareLayout>
      </body>
    </html>
  );
}
