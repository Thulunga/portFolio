import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { FAQ } from './components/FAQ'
import { JsonLd } from './components/JsonLd'
import { buildPageMetadata, faqJsonLd } from './lib/seo'

const Experience = dynamic(() => import('./components/Experience').then((module) => module.Experience))
const Projects = dynamic(() => import('./components/Projects').then((module) => module.Projects))
const Skills = dynamic(() => import('./components/Skills').then((module) => module.Skills))
const Achievements = dynamic(() => import('./components/Achievements').then((module) => module.Achievements))
const Contact = dynamic(() => import('./components/Contact').then((module) => module.Contact))

export const metadata: Metadata = buildPageMetadata({
  title: 'Software Developer Portfolio',
  description:
    'Software developer portfolio of Thulunga Basumatary featuring Angular, TypeScript, React, enterprise frontend architecture, and full-stack project work.',
  path: '/',
  keywords: [
    'software developer portfolio',
    'angular developer portfolio',
    'frontend developer portfolio',
    'typescript engineer portfolio',
    'full stack developer projects',
  ],
})

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
