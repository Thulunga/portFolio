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
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-dark-600 dark:text-dark-400 text-lg max-w-2xl mx-auto">
            Key milestones and recognitions from professional work and academic background.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg dark:shadow-dark-800/20 hover:shadow-xl dark:hover:shadow-dark-700/30 transition-all border border-gray-100 dark:border-dark-700"
            >
              <div className={`bg-gradient-to-r ${item.color} p-5 flex items-center space-x-4`}>
                <div className="text-4xl" role="img" aria-label={item.title}>{item.icon}</div>
                <div className="text-white">
                  <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                  <p className="text-white/85 text-sm mt-0.5">{item.detail}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MVP Certificate Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl border border-amber-200 dark:border-amber-800/40">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="text-white font-bold text-lg">MVP Nominee Certificate</h3>
                <p className="text-white/80 text-sm">SOTI Inc. — Recognition of Excellence</p>
              </div>
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/mvp_img.png"
                alt="MVP Nominee Certificate - SOTI Inc."
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Years at SOTI' },
            { value: '2x', label: 'MVP Nominee' },
            { value: '10+', label: 'UI Components Shipped' },
            { value: 'NIT', label: 'Calicut Graduate' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white dark:bg-dark-800 rounded-xl p-5 border border-gray-100 dark:border-dark-700 shadow-sm"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-dark-600 dark:text-dark-400 text-sm font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
