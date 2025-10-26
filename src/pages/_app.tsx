// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.scss';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/context/ThemeContext'; // Import the ThemeProvider
import { Poppins, Inter } from 'next/font/google'; // Import fonts

// Configure fonts to match variables.scss
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // By adding the font variables to a parent element, they are available globally
    <div className={`${inter.variable} ${poppins.variable}`}>
      <Head>
        <title>Gifted Tours - Your Ultimate Cape Town Tour Experience</title>
        <meta name="description" content="Welcome to Gifted Tours - Providing exceptional tour experiences in Cape Town with professional service and unforgettable memories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Cape Town tours, travel, gifted tours, tourism, vacation, travel guide, South Africa" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Gifted Tours" />
        <meta property="og:description" content="Your Ultimate Tour Experience" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gifted-tours.vercel.app/" /> {/* Use your actual domain */}
        <meta property="og:image" content="/assets/images/logo.jpg" />
      </Head>
      
      {/* Wrap the entire application with the ThemeProvider */}
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;