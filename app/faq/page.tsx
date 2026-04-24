import type { Metadata } from 'next'

import { FAQ } from '../components/FAQ'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata, faqJsonLd } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'FAQ | Software Developer Portfolio',
  description:
    'Frequently asked questions about Thulunga Basumatary, technology stack, current role, and availability for software developer opportunities.',
  path: '/faq',
  keywords: ['software developer faq', 'frontend developer faq', 'portfolio questions'],
})

export default function FaqPage() {
  return (
    <PageScaffold currentPageName="FAQ" currentPagePath="/faq" extraSchema={faqJsonLd}>
      <FAQ />
    </PageScaffold>
  )
}
