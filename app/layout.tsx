import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import { JsonLd } from './components/JsonLd'
import { personJsonLd, siteConfig, websiteJsonLd } from './lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Thulunga Basumatary | Software Developer Portfolio',
    template: '%s | Thulunga Basumatary',
  },
  description:
    'Software Developer Portfolio of Thulunga Basumatary - Software Developer 1 at SOTI Inc. specializing in Angular, TypeScript, React, and enterprise frontend engineering.',
  keywords: [
    'software developer portfolio',
    'frontend developer portfolio',
    'angular developer portfolio',
    'typescript developer',
    'react developer portfolio',
    'Thulunga Basumatary',
    'SOTI developer',
    'enterprise frontend developer',
  ],
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.author, url: siteConfig.linkedin }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: 'Thulunga Basumatary | Software Developer Portfolio',
    description:
      'Explore projects, achievements, and experience of Thulunga Basumatary, a software developer focused on Angular, TypeScript, and scalable frontend systems.',
    locale: 'en_US',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Thulunga Basumatary developer portfolio profile image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thulunga Basumatary | Software Developer Portfolio',
    description:
      'Software Developer 1 portfolio with Angular, TypeScript, and full-stack project highlights.',
    creator: '@Thulunga',
    images: [siteConfig.defaultOgImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
