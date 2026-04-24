import type { Metadata } from 'next'

import { Contact } from '../components/Contact'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact | Hire Frontend Developer',
  description:
    'Contact Thulunga Basumatary for software engineering opportunities, frontend developer roles, and collaboration on product development.',
  path: '/contact',
  keywords: ['hire frontend developer', 'contact software developer', 'angular developer contact'],
})

export default function ContactPage() {
  return (
    <PageScaffold currentPageName="Contact" currentPagePath="/contact">
      <Contact />
    </PageScaffold>
  )
}
