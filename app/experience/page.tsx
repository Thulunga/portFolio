import type { Metadata } from 'next'

import { Experience } from '../components/Experience'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Experience | Software Developer I',
  description:
    'Professional experience of Thulunga Basumatary at SOTI Inc. including Angular architecture, performance optimization, and enterprise product delivery.',
  path: '/experience',
  keywords: ['software developer experience', 'angular performance optimization', 'enterprise frontend engineer'],
})

export default function ExperiencePage() {
  return (
    <PageScaffold currentPageName="Experience" currentPagePath="/experience">
      <Experience />
    </PageScaffold>
  )
}
