import { motion } from 'framer-motion'
import { AgentGrid } from '../agents/AgentGrid'

export function AgentsSection() {
  return (
    <section id="agents" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">8 Specialized Agents</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A complete team of AI specialists, each with unique capabilities,
            working together to deliver exceptional results.
          </p>
        </motion.div>

        <AgentGrid />
      </div>
    </section>
  )
}
