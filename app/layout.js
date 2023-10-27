import './globals.css';
import { Inter } from 'next/font/google';

import { Layout } from '@/_components/server/layout';
import { generateSeoForPage } from '@/_components/server/seo';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  return generateSeoForPage();
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
