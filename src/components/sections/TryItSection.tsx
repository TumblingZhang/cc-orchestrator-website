import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { Terminal, Copy, Check, Sparkles } from 'lucide-react'

const quickStartCommand = `Fetch https://github.com/TumblingZhang/cc-orchestrator and use @cc-orchestrator/agents/MANAGER.md to [build 3 versions of a personal portfolio website]`

const exampleReplacements = [
  'build a task management app with 3 different UI styles',
  'create 5 versions of a habit tracker to compare',
  'design a landing page for my startup',
]

export function TryItSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(quickStartCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="try-it" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Try It Now</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Get started in under 2 minutes. No configuration needed.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Install Claude Code</h3>
                  <div className="bg-dark-900/80 rounded-lg p-4 font-mono text-sm">
                    <code className="text-emerald-400">npm install -g @anthropic-ai/claude-code</code>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Run Claude Code</h3>
                  <div className="bg-dark-900/80 rounded-lg p-4 font-mono text-sm">
                    <code className="text-emerald-400">claude</code>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Step 3 - Quick Start */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="p-6 border-indigo-500/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-1">Quick Start</h3>
                  <p className="text-white/60 text-sm mb-4">Copy & paste this into Claude Code:</p>
                  <div className="bg-dark-900/80 rounded-lg p-4 relative group">
                    <pre className="text-sm text-white/90 whitespace-pre-wrap break-words font-mono leading-relaxed">
                      <span className="text-white/80">Fetch https://github.com/TumblingZhang/cc-orchestrator and use @cc-orchestrator/agents/MANAGER.md to </span>
                      <span className="text-indigo-400 bg-indigo-500/20 px-1 rounded">[build 3 versions of a personal portfolio website]</span>
                    </pre>
                    <button
                      onClick={handleCopy}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-white/60" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Example replacements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <h3 className="text-white font-semibold">Replace <code className="px-2 py-0.5 bg-indigo-500/20 rounded text-indigo-300">[...]</code> with your idea</h3>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Swap the bracketed text with any vague idea you have:
            </p>
            <div className="flex flex-wrap gap-2">
              {exampleReplacements.map((prompt, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                >
                  [{prompt}]
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
