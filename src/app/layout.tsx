/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Urbanist } from '@next/font/google';

const inter = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxed HQ',
  description:
    'A touch of luxury is on its way: Prepare yourself for an extraordinary experience as we unveil...',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
