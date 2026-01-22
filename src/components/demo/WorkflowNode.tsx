import { motion } from 'framer-motion'
import { agents } from '../../data/agents'

interface WorkflowNodeProps {
  agentId: string
  x: number
  y: number
  active?: boolean
  delay?: number
  label?: string
}

export function WorkflowNode({ agentId, x, y, active = false, delay = 0, label }: WorkflowNodeProps) {
  const agent = agents.find((a) => a.id === agentId)

  // Special handling for "user" node
  const isUser = agentId === 'user'
  const displayName = isUser ? 'User' : agent?.name || agentId
  const color = isUser ? '#FFFFFF' : agent?.color || '#6366F1'
  const Icon = agent?.icon

  return (
    <motion.g
      data-testid="workflow-node"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Glow effect */}
      <motion.circle
        cx={x}
        cy={y}
        r={32}
        fill={color}
        opacity={0.2}
        animate={active ? { opacity: [0.2, 0.4, 0.2], r: [32, 38, 32] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Main circle */}
      <circle
        cx={x}
        cy={y}
        r={28}
        fill="rgba(255, 255, 255, 0.1)"
        stroke={color}
        strokeWidth={2}
        style={{ filter: 'url(#glow)' }}
      />

      {/* Icon or text */}
      {Icon ? (
        <g transform={`translate(${x - 12}, ${y - 12})`}>
          <Icon size={24} color={color} />
        </g>
      ) : (
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontSize={12}
          fontWeight="bold"
        >
          {isUser ? 'U' : '?'}
        </text>
      )}

      {/* Label */}
      <text
        x={x}
        y={y + 45}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        opacity={0.8}
      >
        {label || displayName}
      </text>
    </motion.g>
  )
}
