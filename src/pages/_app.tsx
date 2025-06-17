// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gifted Tours - Your Ultimate Tour Experience</title>
        <meta name="description" content="Welcome to Gifted Tours - Providing exceptional tour experiences with professional service and unforgettable memories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="tours, travel, gifted tours, tourism, vacation, travel guide" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Gifted Tours" />
        <meta property="og:description" content="Your Ultimate Tour Experience" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftedtours.com" /> {/* Replace with your actual domain */}
        <meta property="og:image" content="/images/logo.jpg" /> {/* Updated to use logo from public/images */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp