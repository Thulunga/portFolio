import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thulunga Basumatary - Software Developer I | Angular & TypeScript',
  description: 'Software Developer I at SOTI Inc. Specialist in Angular, TypeScript, and enterprise frontend development. MVP Nominee 2x | NIT Calicut',
  keywords: ['Thulunga Basumatary', 'Software Developer', 'Angular', 'TypeScript', 'Frontend Developer', 'Full-Stack', 'SOTI Inc'],
  authors: [{ name: 'Thulunga Basumatary', url: 'https://linkedin.com/in/thulunga' }],
  openGraph: {
    type: 'website',
    url: 'https://thulunga.vercel.app',
    title: 'Thulunga Basumatary - Software Developer I',
    description: 'Software Developer I at SOTI Inc. Specialist in Angular, TypeScript, and enterprise frontend development.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Thulunga',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Thulunga Basumatary',
              jobTitle: 'Software Developer I',
              url: 'https://thulunga.vercel.app',
              sameAs: [
                'https://linkedin.com/in/thulunga',
                'https://github.com/Thulunga'
              ],
              workLocation: {
                '@type': 'Place',
                name: 'Gurgaon, India'
              }
            })
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
