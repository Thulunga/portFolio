'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      title: 'Software Developer I',
      company: 'SOTI Inc.',
      location: 'Gurgaon, India',
      period: 'July 2024 - Present',
      highlights: [
        'Architected and shipped a reusable AI-powered chatbot Angular package deployed across multiple SOTI products',
        'Engineered frontend performance for screens rendering 5,000+ records using virtual scrolling and OnPush change detection',
        'Designed scalable Angular module architecture with RxJS-based state management',
        'Cross-functional frontend lead bridging Product, Design, and Backend teams',
        'MVP Nominee 2x Consecutive (2024 and 2025)',
      ],
    },
    {
      title: 'Associate Developer',
      company: 'SOTI Inc.',
      location: 'Gurgaon, India',
      period: 'August 2022 - June 2024',
      highlights: [
        'Delivered 10+ reusable Angular UI components adopted across multiple enterprise modules',
        'Resolved high-priority UI bugs and performance regressions',
        'Grew into component design ownership ahead of promotion to Software Developer I',
        'Collaborated with cross-functional teams on feature delivery and code reviews',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg dark:shadow-dark-800/20 border border-gray-100 dark:border-dark-700 hover:shadow-2xl dark:hover:shadow-dark-700/30 transition-all"
            >
              <div className="grid md:grid-cols-4 gap-4 md:gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-dark-700">
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-dark-600 dark:text-dark-400 font-medium">{exp.location}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                    📅 {exp.period}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-blue-500 font-bold mt-1">→</span>
                    <span className="text-dark-600 dark:text-dark-300 leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800/30"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-dark-900 dark:text-white mb-2">B.Tech in Computer Science & Engineering</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">National Institute of Technology (NIT), Calicut</p>
              <p className="text-dark-600 dark:text-dark-400 mt-1">Graduated: June 2022</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Full Stack Development Training</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Xebia Academy (under SOTI Inc.)</p>
              <p className="text-dark-600 dark:text-dark-400 mt-1">Completed: October 2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
