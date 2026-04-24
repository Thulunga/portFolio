import type { Metadata } from 'next'
import Link from 'next/link'

import { PageScaffold } from '../components/PageScaffold'
import { buildPageMetadata } from '../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog | Frontend Engineering Insights',
  description:
    'Frontend engineering insights, Angular architecture notes, and performance optimization articles from Thulunga Basumatary.',
  path: '/blog',
  keywords: ['frontend engineering blog', 'angular performance blog', 'developer articles'],
})

const upcomingTopics = [
  'How to scale Angular component architecture in enterprise products',
  'Practical TypeScript patterns for maintainable frontend codebases',
  'Real-world UI performance techniques for large data-heavy interfaces',
]

export default function BlogPage() {
  return (
    <PageScaffold currentPageName="Blog" currentPagePath="/blog">
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">Blog</h1>
            <p className="text-dark-600 dark:text-dark-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              A publishing-ready space for technical writing and frontend engineering insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {upcomingTopics.map((topic) => (
              <article key={topic} className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-5 shadow-sm">
                <p className="text-dark-900 dark:text-white font-semibold leading-relaxed">{topic}</p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors"
            >
              Request A Specific Topic
            </Link>
          </div>
        </div>
      </section>
    </PageScaffold>
  )
}
