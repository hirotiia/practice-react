import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import { Header } from '@/components/layouts/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Lessons',
  description: 'Next.jsの環境でReactの学習を進めるためのサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header></Header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
