import { motion } from 'framer-motion'
import type { WorkflowPhase } from '../../types/workflow'
import { agents } from '../../data/agents'

interface PhaseStepProps {
  phase: WorkflowPhase
  index: number
  isLast: boolean
}

export function PhaseStep({ phase, index, isLast }: PhaseStepProps) {
  const phaseAgents = phase.agents
    .map((id) => agents.find((a) => a.id === id))
    .filter(Boolean)

  return (
    <motion.div
      data-testid="phase-step"
      className="flex flex-col md:flex-row items-start md:items-center gap-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Step number */}
      <div className="flex items-center gap-4 md:w-32 shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center font-heading font-bold text-lg">
          {phase.id}
        </div>
        <div className="md:hidden">
          <h3 className="font-heading font-semibold text-lg">{phase.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 glass p-4 md:p-5">
        <h3 className="hidden md:block font-heading font-semibold text-lg mb-2">
          {phase.name}
        </h3>
        <p className="text-white/60 text-sm mb-3">{phase.description}</p>

        {/* Agent badges */}
        <div className="flex flex-wrap gap-2">
          {phaseAgents.map((agent) => {
            if (!agent) return null
            const Icon = agent.icon
            return (
              <div
                key={agent.id}
                className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs"
                style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
              >
                <Icon size={12} />
                {agent.name}
              </div>
            )
          })}
        </div>
      </div>

      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute left-[19px] top-[50px] w-0.5 h-8 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      )}
    </motion.div>
  )
}
