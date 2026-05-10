import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Aplikasi Custom | Adji Pangestu',
  description: 'Landing page jasa pembuatan aplikasi custom untuk sekolah, lembaga, bisnis, klinik, dan organisasi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
