'use client'

import { motion } from 'framer-motion'

export function About() {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: '📅' },
    { number: '2x', label: 'MVP Nominee', icon: '🏆' },
    { number: '17K+', label: 'SOTI Customers', icon: '👥' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              Results-driven Software Developer with <strong>3+ years</strong> building enterprise-grade Angular and TypeScript applications at SOTI Inc., a global MDM/EMM leader.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I've architected a <strong>reusable AI-powered chatbot UI package</strong> deployed across multiple products, engineered <strong>performance solutions for 5,000+ record data views</strong>, and led UI implementation for complex enterprise workflows.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              Passionate about <strong>clean architecture</strong>, <strong>high-performance UIs</strong>, and <strong>full-stack product thinking</strong>. I love translating complex requirements into elegant, accessible, and scalable digital experiences.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-2 text-dark-700 dark:text-dark-200">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>B.Tech Computer Science</strong> - NIT Calicut (Graduated 2022)</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-700 dark:text-dark-200">
                <span className="text-blue-500 font-bold">✓</span>
                <span>From <strong>Bodo community</strong>, Northeast India</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-700 dark:text-dark-200">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>Philosophy:</strong> "Consistency beats talent. Systems beat motivation. Execution beats ideas."</span>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg dark:shadow-lg hover:shadow-2xl dark:hover:shadow-dark-700/20 transition-shadow border border-gray-100 dark:border-dark-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{stat.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                    <div className="text-dark-600 dark:text-dark-400 font-medium mt-1">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white"
            >
              <h3 className="font-bold text-lg mb-2">Current Role</h3>
              <p className="text-blue-100">Software Developer I at SOTI Inc. • Gurgaon, India</p>
              <p className="text-blue-100 text-sm mt-2">Since July 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
