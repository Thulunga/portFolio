import type { Metadata } from 'next'

import { About } from '../components/About'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About | Frontend Developer',
  description:
    'Learn about Thulunga Basumatary, a Software Developer I focused on Angular, TypeScript, enterprise frontend systems, and scalable product engineering.',
  path: '/about',
  keywords: ['about frontend developer', 'software engineer profile', 'angular developer background'],
})

export default function AboutPage() {
  return (
    <PageScaffold currentPageName="About" currentPagePath="/about">
      <About />
    </PageScaffold>
  )
}
