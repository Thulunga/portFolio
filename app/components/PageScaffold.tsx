import type { ReactNode } from 'react'

import { Breadcrumbs } from './Breadcrumbs'
import { Footer } from './Footer'
import { Header } from './Header'
import { JsonLd } from './JsonLd'
import { buildBreadcrumbJsonLd } from '../lib/seo'

type PageScaffoldProps = {
  currentPageName: string
  currentPagePath: string
  children: ReactNode
  extraSchema?: Record<string, unknown>
}

export function PageScaffold({
  currentPageName,
  currentPagePath,
  children,
  extraSchema,
}: PageScaffoldProps) {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: currentPageName, path: currentPagePath },
  ]

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      {extraSchema ? <JsonLd data={extraSchema} /> : null}
      <Header />
      <main className="pt-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: currentPageName, href: currentPagePath },
          ]}
        />
        {children}
      </main>
      <Footer />
    </>
  )
}
