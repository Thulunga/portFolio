'use client'

import { motion } from 'framer-motion'

export function Contact() {
  const contactLinks = [
    {
      icon: '💼',
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      href: 'https://linkedin.com/in/thulunga',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '📧',
      title: 'Email',
      subtitle: 'thulunga.tb@gmail.com',
      href: 'mailto:thulunga.tb@gmail.com',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: '💻',
      title: 'GitHub',
      subtitle: 'See my work',
      href: 'https://github.com/Thulunga',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      subtitle: 'Chat with me',
      href: 'https://wa.me/918638113906',
      color: 'from-green-500 to-green-600',
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
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Open to senior frontend, full-stack, and product engineering roles. Let's build something great together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${link.color} p-5 sm:p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group min-h-[200px] sm:min-h-auto flex flex-col justify-between`}
            >
              <div>
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform inline-block">{link.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-1">{link.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm">{link.subtitle}</p>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 text-white/80 group-hover:text-white transition-colors text-sm">
                <span>Get in touch</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-800 rounded-xl p-5 sm:p-8 shadow-lg dark:shadow-dark-800/20 border border-gray-100 dark:border-dark-700 text-center"
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-4">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-dark-900 dark:text-white font-semibold text-sm sm:text-base">Available for new opportunities</p>
          </div>
          <p className="text-dark-600 dark:text-dark-300 text-xs sm:text-base">
            I'm actively seeking full-time software development roles and select freelance projects in Angular, TypeScript, and full-stack development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
