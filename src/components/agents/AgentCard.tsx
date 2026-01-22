import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import type { Agent } from '../../types/agent'

interface AgentCardProps {
  agent: Agent
  index: number
}

export function AgentCard({ agent, index }: AgentCardProps) {
  const Icon = agent.icon

  return (
    <motion.div
      data-testid="agent-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard
        hover
        className="p-6 h-full"
        tabIndex={0}
        role="article"
        aria-label={`${agent.name}: ${agent.role}`}
      >
        <div className="flex items-start gap-4">
          <div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${agent.color}20` }}
          >
            <Icon size={24} style={{ color: agent.color }} />
          </div>

          <div className="flex-1">
            <h3 className="font-heading font-semibold text-lg text-white mb-1">
              {agent.name}
            </h3>
            <p
              className="text-sm font-medium mb-2"
              style={{ color: agent.color }}
            >
              {agent.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {agent.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
