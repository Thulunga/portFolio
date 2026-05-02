import type { Metadata } from 'next'

export const siteConfig = {
  siteName: 'Thulunga Basumatary Portfolio',
  author: 'Thulunga Basumatary',
  role: 'Software Developer 1',
  siteUrl: 'https://thulunga.vercel.app',
  location: 'Gurgaon, India',
  email: 'thulunga.tb@gmail.com',
  github: 'https://github.com/Thulunga',
  linkedin: 'https://linkedin.com/in/thulunga',
  defaultOgImage: '/profile.png',
}

export const primaryNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export type SeoPageInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function buildPageMetadata(input: SeoPageInput): Metadata {
  const canonicalUrl = `${siteConfig.siteUrl}${input.path}`

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    keywords: input.keywords,
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
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      title: input.title,
      description: input.description,
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
      title: input.title,
      description: input.description,
      creator: '@Thulunga',
      images: [siteConfig.defaultOgImage],
    },
  }
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author,
  url: siteConfig.siteUrl,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.linkedin, siteConfig.github],
  worksFor: {
    '@type': 'Organization',
    name: 'SOTI Inc.',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National Institute of Technology, Calicut',
  },
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  }
}

export const faqItems = [
  {
    question: 'Who is Thulunga Basumatary?',
    answer:
      'Thulunga Basumatary is a Software Developer 1 at SOTI Inc. specializing in Angular, TypeScript, and enterprise frontend architecture.',
  },
  {
    question: 'What technologies does this frontend developer use?',
    answer:
      'The primary stack includes Angular, TypeScript, RxJS, Next.js, React, PostgreSQL, Supabase, and modern CI/CD deployment workflows.',
  },
  {
    question: 'Is Thulunga available for software developer roles?',
    answer:
      'Yes. Thulunga is open to software developer opportunities and selected freelance projects focused on frontend and full-stack development.',
  },
  {
    question: 'Where can I view live projects and source code?',
    answer:
      'Live project links are listed in the projects section, and source code examples are available on GitHub.',
  },
]

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}
