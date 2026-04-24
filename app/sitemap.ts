import type { MetadataRoute } from 'next'

import { siteConfig } from './lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: siteConfig.siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.siteUrl}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.siteUrl}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteConfig.siteUrl}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.siteUrl}/achievements`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.siteUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ]
}
