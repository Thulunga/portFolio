'use client'

import { motion, easeOut } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration - hidden on mobile */}
      <div className="absolute top-10 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-10 sm:opacity-20 dark:opacity-5 sm:dark:opacity-10"></div>
      <div className="absolute bottom-0 -right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-10 sm:opacity-20 dark:opacity-5 sm:dark:opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-7 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 max-w-xl">
            <motion.div variants={itemVariants}>
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                👋 Welcome to my portfolio
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-900 dark:text-white leading-[1.1] tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Thulunga</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold leading-snug">
                Software Developer 1 | Angular & TypeScript Specialist
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-base md:text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                Building enterprise-grade Angular applications at <span className="font-semibold text-dark-900 dark:text-white">SOTI Inc.</span>, a global MDM leader serving 17,000+ customers worldwide.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                  ⭐ MVP Nominee 2x
                </span>
                <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                  🎓 NIT Calicut
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 sm:px-8 rounded-lg transition-all transform hover:scale-[1.02] text-base min-h-[46px]"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Thulunga_Basumatary_Resume.pdf"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-3 px-4 sm:px-8 rounded-lg transition-all hover:scale-[1.02] text-base min-h-[46px]"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
              <a
                href="https://github.com/Thulunga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-4 sm:px-8 rounded-lg transition-all hover:scale-[1.02] text-base min-h-[46px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 sm:gap-6 pt-2 sm:pt-4">
              <motion.a
                href="https://linkedin.com/in/thulunga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-dark-600 dark:text-dark-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:thulunga.tb@gmail.com"
                aria-label="Send email"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-dark-600 dark:text-dark-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center order-first md:order-none mb-4 sm:mb-6 md:mb-0"
          >
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10"></div>
              <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 dark:border-blue-400/30 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Thulunga Basumatary"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-dark-600 dark:text-dark-400"
        >
          <p className="text-xs sm:text-sm font-medium mb-2">Scroll to explore</p>
          <svg className="w-5 sm:w-6 h-5 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
