import Link from 'next/link'

import { faqItems } from '../lib/seo'

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-dark-600 dark:text-dark-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Quick answers for recruiters and hiring teams evaluating this software developer portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="bg-white dark:bg-dark-800 rounded-xl p-5 sm:p-6 border border-gray-100 dark:border-dark-700 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{item.question}</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors"
          >
            Contact For Opportunities
          </Link>
        </div>
      </div>
    </section>
  )
}
