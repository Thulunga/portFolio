'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'MVP Nominee - 2x Consecutive',
      detail: 'SOTI Inc. 2024 and 2025',
      description: 'Nominated for Most Valuable Professional two years running - recognizing impact across product delivery, team collaboration, and technical leadership.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: '📈',
      title: 'Promoted Ahead of Cycle',
      detail: 'Associate Developer to Software Developer I',
      description: 'Promoted ahead of the standard cycle at SOTI Inc., reflecting consistent high performance and expanded ownership of component architecture.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: '🎤',
      title: 'SDE-1 Technical Interviewer',
      detail: 'SOTI Inc.',
      description: 'Contributed to technical hiring for SDE-1 roles at SOTI Inc. - shaping team hiring standards beyond individual contributor scope.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🎓',
      title: 'B.Tech Computer Science',
      detail: 'National Institute of Technology, Calicut - 2022',
      description: 'Graduated from NIT Calicut, one of India\'s premier engineering institutions - building a strong foundation in CS fundamentals and software engineering.',
      color: 'from-purple-400 to-pink-500',
    },
  ]

  const certificates = [
    {
      icon: '🏆',
      title: 'MVP Nominee 2024',
      subtitle: 'SOTI Inc.',
      image: '/mvp_img.png',
      imageAlt: 'MVP Nominee Certificate 2024 - SOTI Inc.',
      accent: 'from-amber-400 to-orange-500',
      border: 'border-amber-200 dark:border-amber-800/40',
      ring: 'ring-amber-100/80 dark:ring-amber-700/30',
      shadow: 'hover:shadow-amber-200/70 dark:hover:shadow-amber-900/40',
      badge: 'bg-amber-500/90',
      year: '2024',
    },
    {
      icon: '⭐',
      title: 'MVP Nominee 2025',
      subtitle: 'SOTI Inc.',
      image: '/mvp_img_2025.png',
      imageAlt: 'MVP Nominee Certificate 2025 - SOTI Inc.',
      accent: 'from-blue-400 to-cyan-500',
      border: 'border-blue-200 dark:border-blue-800/40',
      ring: 'ring-blue-100/80 dark:ring-blue-700/30',
      shadow: 'hover:shadow-blue-200/70 dark:hover:shadow-blue-900/40',
      badge: 'bg-sky-500/90',
      year: '2025',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-dark-600 dark:text-dark-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Key milestones and recognitions from professional work and academic background.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg dark:shadow-dark-800/20 hover:shadow-xl dark:hover:shadow-dark-700/30 transition-all border border-gray-100 dark:border-dark-700"
            >
              <div className={`bg-gradient-to-r ${item.color} p-4 sm:p-5 flex items-center gap-3 sm:gap-4`}>
                <div className="text-3xl sm:text-4xl flex-shrink-0" role="img" aria-label={item.title}>{item.icon}</div>
                <div className="text-white min-w-0">
                  <h3 className="text-base sm:text-lg font-bold leading-tight">{item.title}</h3>
                  <p className="text-white/85 text-xs sm:text-sm mt-0.5">{item.detail}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-dark-600 dark:text-dark-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MVP Certificates - 2024 & 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10"
        >
          <div className="text-center mb-5 sm:mb-6">
            <p className="inline-flex items-center rounded-full border border-gray-200 dark:border-dark-700 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-dark-600 dark:text-dark-300 bg-white/90 dark:bg-dark-800/90">
              Recognition Showcase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl ${certificate.shadow} border ${certificate.border} transition-all duration-300`}
              >
                <div className={`bg-gradient-to-r ${certificate.accent} px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3`}>
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{certificate.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-sm sm:text-lg">{certificate.title}</h3>
                      <p className="text-white/80 text-xs sm:text-sm">{certificate.subtitle}</p>
                    </div>
                  </div>
                  <span className={`${certificate.badge} text-white text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex-shrink-0`}>{certificate.year}</span>
                </div>

                <div className="p-3 sm:p-5 bg-gradient-to-b from-slate-50/80 to-white dark:from-dark-900/80 dark:to-dark-900">
                  <div className={`relative w-full rounded-xl ring-1 ${certificate.ring} bg-[#eaf7ff] dark:bg-dark-900/70 overflow-hidden`} style={{ aspectRatio: '1.18/1' }}>
                    <Image
                      src={certificate.image}
                      alt={certificate.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                      className="object-contain p-1 sm:p-1.5 md:p-2 transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {[
            { value: '3+', label: 'Years at SOTI' },
            { value: '2x', label: 'MVP Nominee' },
            { value: '10+', label: 'UI Components Shipped' },
            { value: 'NIT', label: 'Calicut Graduate' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white dark:bg-dark-800 rounded-xl p-3 sm:p-5 border border-gray-100 dark:border-dark-700 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
