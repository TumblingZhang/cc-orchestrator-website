import { motion } from 'framer-motion'

interface ConnectionLineProps {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
  animated?: boolean
  color?: string
}

export function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  animated = true,
  color = '#6366F1',
}: ConnectionLineProps) {
  const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

  return (
    <g>
      {/* Main line */}
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={2}
        strokeOpacity={0.5}
        strokeDasharray={length}
        initial={{ strokeDashoffset: length }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay }}
      />

      {/* Animated dot */}
      {animated && (
        <motion.circle
          r={4}
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: [x1, x2],
            cy: [y1, y2],
          }}
          transition={{
            duration: 1.5,
            delay: delay + 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      )}
    </g>
  )
}
