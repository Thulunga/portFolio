'use client'

import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      name: 'StoreBanao',
      url: 'https://storebanao.in',
      tagline: 'Multi-vendor e-commerce platform enabling Indian D2C sellers',
      description: 'A production SaaS platform helping sellers launch online stores with zero technical knowledge.',
      highlights: [
        'Vendor-specific subdomains with Clerk multi-tenant auth',
        'Product, order, and inventory management system',
        'Cloudinary CDN with intelligent image optimization',
        'Manual UPI billing with Razorpay integration in progress',
      ],
      tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Tailwind CSS', 'Turborepo'],
      featured: true,
    },
    {
      name: 'Planningo',
      url: 'https://mydailyworkspace.site',
      tagline: 'All-in-one productivity platform for life organization',
      description: 'Six integrated modules for complete task and life management with real-time sync.',
      highlights: [
        'Todos, Calendar, Day Planner, Reminders, Trip Planner, Expenses & Budget',
        'Row-level security via Supabase for enterprise-grade data isolation',
        'Drag-and-drop day planner with time-block scheduling',
        'Mobile-first responsive design across all devices',
      ],
      tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Tailwind CSS'],
      featured: true,
    },
    {
      name: 'AI-Powered Chatbot UI Package',
      url: null,
      tagline: 'Reusable Angular package for enterprise products',
      description: 'Internal SOTI package deployed across multiple enterprise products with zero re-implementation.',
      highlights: [
        'Single-import integration with configurable theming',
        'RxJS-driven reactive conversation state',
        'Handles streaming responses with low latency',
        'Published as versioned Angular package',
      ],
      tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
      featured: false,
      badge: 'Internal',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className={`group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg dark:shadow-dark-800/20 hover:shadow-2xl dark:hover:shadow-dark-700/30 transition-all border border-gray-100 dark:border-dark-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                  {project.badge && (
                    <span className="bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full">{project.badge}</span>
                  )}
                </div>
                <p className="text-blue-100">{project.tagline}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start space-x-2 text-sm text-dark-600 dark:text-dark-400">
                      <span className="text-blue-500 font-bold mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {project.url && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-4"
                  >
                    Visit Project →
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
