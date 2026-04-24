import type { Metadata } from 'next'

import { Skills } from '../components/Skills'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Skills | Angular and TypeScript Developer',
  description:
    'Technical skills overview covering Angular, TypeScript, React, Next.js, databases, accessibility, and performance engineering.',
  path: '/skills',
  keywords: ['angular skills', 'typescript skills', 'frontend developer tech stack'],
})

export default function SkillsPage() {
  return (
    <PageScaffold currentPageName="Skills" currentPagePath="/skills">
      <Skills />
    </PageScaffold>
  )
}
