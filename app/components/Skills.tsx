'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      name: 'Enterprise Frontend',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      name: 'Full-Stack',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      skills: ['Next.js 14', 'React.js', 'Node.js', 'Express.js'],
    },
    {
      name: 'Database',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
      skills: ['PostgreSQL', 'Prisma ORM', 'Supabase', 'Redis'],
    },
    {
      name: 'Auth & Payments',
      icon: '🔐',
      color: 'from-orange-500 to-red-500',
      skills: ['Clerk', 'Supabase Auth', 'Razorpay', 'Resend'],
    },
    {
      name: 'Infrastructure',
      icon: '☁️',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Vercel', 'Railway', 'Turborepo', 'Git', 'GitHub'],
    },
    {
      name: 'Practices',
      icon: '✨',
      color: 'from-amber-500 to-orange-500',
      skills: ['Component Architecture', 'State Management', 'Performance Optimization', 'WCAG Accessibility', 'i18n', 'Responsive Design'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-5 sm:p-6 shadow-lg dark:shadow-dark-800/20 hover:shadow-xl dark:hover:shadow-dark-700/30 transition-all border border-gray-100 dark:border-dark-700"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-3 sm:p-4 rounded-lg mb-4 text-white`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold">{category.name}</h3>
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 2 }}
                    className="bg-gray-50 dark:bg-dark-700/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-dark-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-200">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5 sm:p-8 border border-blue-200 dark:border-blue-800/30"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white mb-5 sm:mb-6">Key Strengths</h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-500 font-bold text-base sm:text-lg flex-shrink-0">→</span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-dark-900 dark:text-white text-sm sm:text-base">Enterprise Architecture</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm mt-1">Designing scalable component systems for complex applications</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-500 font-bold text-base sm:text-lg flex-shrink-0">→</span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-dark-900 dark:text-white text-sm sm:text-base">Performance Optimization</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm mt-1">Virtual scrolling, lazy loading, and change detection strategies</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-500 font-bold text-base sm:text-lg flex-shrink-0">→</span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-dark-900 dark:text-white text-sm sm:text-base">Full-Stack Thinking</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm mt-1">Backend to frontend - understanding complete product workflows</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-500 font-bold text-base sm:text-lg flex-shrink-0">→</span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-dark-900 dark:text-white text-sm sm:text-base">Accessibility (WCAG)</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm mt-1">Building inclusive interfaces for all users</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
