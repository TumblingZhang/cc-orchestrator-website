import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Github } from 'lucide-react'

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  const scrollToTryIt = () => {
    const element = document.querySelector('#try-it')
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient-hero"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">CC Orchestrator</span>
          </motion.h1>

          {/* Viral Slogan */}
          <motion.div
            className="mb-8"
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              <span className="inline-block text-white/70">Vague idea in.</span>{' '}
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Production code out.</span>
            </p>
          </motion.div>

          <motion.p
            data-testid="hero-subtitle"
            className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Just describe what you want. 8 AI agents handle the rest — you only approve.
          </motion.p>

          <motion.p
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            Intelligent Multi-Agent Development System with structured workflows
            and human-in-the-loop control.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              data-testid="hero-cta"
              size="lg"
              onClick={scrollToTryIt}
              className="shadow-lg shadow-indigo-500/30"
            >
              Try It Now
            </Button>
            <a
              href="https://github.com/TumblingZhang/cc-orchestrator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
