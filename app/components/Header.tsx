'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { primaryNavLinks } from '../lib/seo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-dark-900 shadow-sm dark:shadow-dark-800/20 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Go to home page">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold"
            >
              TB
            </motion.div>
            <span className="hidden sm:block text-lg font-bold text-dark-900 dark:text-white">Thulunga</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {primaryNavLinks.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ color: '#0ea5e9' }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 dark:border-dark-800"
          >
            {primaryNavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
