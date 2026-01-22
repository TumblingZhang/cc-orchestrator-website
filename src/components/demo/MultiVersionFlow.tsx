import { motion } from 'framer-motion'
import { WorkflowNode } from './WorkflowNode'
import { ConnectionLine } from './ConnectionLine'

export function MultiVersionFlow() {
  return (
    <svg
      viewBox="0 0 700 320"
      className="w-full h-auto max-h-[400px]"
      aria-label="Multi-version workflow: Direction Dreamer spawns three parallel development paths"
    >
      <defs>
        <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* User to Manager */}
      <ConnectionLine x1={78} y1={160} x2={142} y2={160} delay={0} color="#FFFFFF" />

      {/* Manager to Direction Dreamer */}
      <ConnectionLine x1={198} y1={160} x2={262} y2={160} delay={0.3} color="#6366F1" />

      {/* Direction Dreamer to 3 parallel paths */}
      <motion.path
        d="M 318 160 Q 370 160 400 80"
        stroke="#8B5CF6"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.path
        d="M 318 160 L 400 160"
        stroke="#8B5CF6"
        strokeWidth={2}
        fill="none"
        strokeDasharray="100"
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.path
        d="M 318 160 Q 370 160 400 240"
        stroke="#8B5CF6"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Parallel paths to merge */}
      <ConnectionLine x1={456} y1={80} x2={520} y2={80} delay={1.0} color="#F59E0B" />
      <ConnectionLine x1={456} y1={160} x2={520} y2={160} delay={1.0} color="#F59E0B" />
      <ConnectionLine x1={456} y1={240} x2={520} y2={240} delay={1.0} color="#F59E0B" />

      {/* Merge back */}
      <motion.path
        d="M 576 80 Q 610 80 620 160"
        stroke="#06B6D4"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.path
        d="M 576 160 L 620 160"
        stroke="#06B6D4"
        strokeWidth={2}
        fill="none"
        strokeDasharray="100"
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.path
        d="M 576 240 Q 610 240 620 160"
        stroke="#06B6D4"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />

      {/* Nodes */}
      <WorkflowNode agentId="user" x={50} y={160} delay={0} />
      <WorkflowNode agentId="manager" x={170} y={160} delay={0.2} />
      <WorkflowNode agentId="direction-dreamer" x={290} y={160} delay={0.5} active />

      {/* Three parallel dreamers */}
      <WorkflowNode agentId="dreamer" x={428} y={80} delay={0.8} label="V1" />
      <WorkflowNode agentId="dreamer" x={428} y={160} delay={0.9} label="V2" />
      <WorkflowNode agentId="dreamer" x={428} y={240} delay={1.0} label="V3" />

      {/* Three parallel developers */}
      <WorkflowNode agentId="developer" x={548} y={80} delay={1.2} label="Dev" />
      <WorkflowNode agentId="developer" x={548} y={160} delay={1.2} label="Dev" />
      <WorkflowNode agentId="developer" x={548} y={240} delay={1.2} label="Dev" />

      {/* Final manager */}
      <WorkflowNode agentId="manager" x={650} y={160} delay={1.6} label="Merge" />

      {/* Title */}
      <text x="350" y="300" textAnchor="middle" fill="white" fontSize="14" opacity="0.6">
        Multi-Version: Direction Dreamer spawns parallel development paths
      </text>
    </svg>
  )
}
