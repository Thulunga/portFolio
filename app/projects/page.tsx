import type { Metadata } from 'next'

import { Projects } from '../components/Projects'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects | Software Developer Portfolio',
  description:
    'Explore featured software projects by Thulunga Basumatary including full-stack Next.js platforms and enterprise Angular packages.',
  path: '/projects',
  keywords: ['developer projects', 'next.js projects', 'angular project portfolio', 'full stack portfolio'],
})

export default function ProjectsPage() {
  return (
    <PageScaffold currentPageName="Projects" currentPagePath="/projects">
      <Projects />
    </PageScaffold>
  )
}
