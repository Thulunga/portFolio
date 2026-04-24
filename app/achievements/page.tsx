import type { Metadata } from 'next'

import { Achievements } from '../components/Achievements'
import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Achievements | MVP Nominee',
  description:
    'Achievements and recognitions of Thulunga Basumatary, including two consecutive MVP nominations and frontend engineering milestones.',
  path: '/achievements',
  keywords: ['mvp nominee', 'developer achievements', 'software engineer recognition'],
})

export default function AchievementsPage() {
  return (
    <PageScaffold currentPageName="Achievements" currentPagePath="/achievements">
      <Achievements />
    </PageScaffold>
  )
}
