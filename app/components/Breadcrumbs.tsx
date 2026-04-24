import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
      <ol className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-dark-900 dark:text-white">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
