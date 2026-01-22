import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import {
  Network,
  Zap,
  ShieldCheck,
  RefreshCw,
  UserCheck,
  Blocks
} from 'lucide-react'

const features = [
  {
    icon: Network,
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple specialized AI agents that work together seamlessly, each handling their domain expertise.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Parallel Execution',
    description: 'Multiple developer agents can work on different tasks simultaneously, dramatically reducing completion time.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Test-Driven Workflow',
    description: 'QA agents write tests before implementation, ensuring code quality and reducing bugs from the start.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: RefreshCw,
    title: 'Iterative Refinement',
    description: 'Dreamer-Critic feedback loops ensure solutions are thoroughly vetted before implementation begins.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop',
    description: 'Stay in control with approval gates at key decision points while automation handles the heavy lifting.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Blocks,
    title: 'Extensible Architecture',
    description: 'Easily add custom agents, modify workflows, and integrate with your existing tools and processes.',
    color: 'from-violet-500 to-indigo-500',
  },
]

const stats = [
  { value: '8', label: 'Specialized Agents' },
  { value: '5x', label: 'Faster Development' },
  { value: '90%', label: 'Test Coverage' },
  { value: '24/7', label: 'Continuous Work' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Built for modern development teams who want to leverage AI without sacrificing control or quality.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="p-6 text-center group hover:bg-white/10 transition-colors duration-300">
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/60 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="p-6 md:p-8 h-full group hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-dark-900/80 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover gradient line */}
                  <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} mt-6 transition-all duration-500 rounded-full`} />
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
