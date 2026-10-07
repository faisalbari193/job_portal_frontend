import type { Metadata } from 'next';
import '../src/index.css';
import { ThemeProvider } from '@/src/components/ThemeProvider';

const description =
  'Discover 208,000+ live jobs, connect with top tech companies, and find your dream career on JobBoard.';

export const metadata: Metadata = {
  title: 'JobBoard - Modern Job Marketplace',
  description,
  openGraph: {
    title: 'JobBoard - Modern Job Marketplace',
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080827] text-white antialiased selection:bg-[#6338F5] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
