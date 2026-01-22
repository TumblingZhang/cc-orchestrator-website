import { motion } from 'framer-motion'
import { WorkflowNode } from './WorkflowNode'
import { ConnectionLine } from './ConnectionLine'

export function FullPipelineFlow() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto max-h-[500px]"
      aria-label="Full pipeline workflow: Complete 8-phase orchestration with iterations and parallel development"
    >
      <defs>
        <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Phase 1: Init */}
      <WorkflowNode agentId="user" x={50} y={80} delay={0} />
      <ConnectionLine x1={78} y1={80} x2={122} y2={80} delay={0.1} color="#FFFFFF" />
      <WorkflowNode agentId="manager" x={150} y={80} delay={0.2} label="Init" />

      {/* Phase 2: Requirements - Dreamer <-> Critic loop */}
      <ConnectionLine x1={178} y1={80} x2={242} y2={80} delay={0.3} color="#6366F1" />
      <WorkflowNode agentId="dreamer" x={270} y={80} delay={0.4} />
      <ConnectionLine x1={298} y1={80} x2={362} y2={80} delay={0.5} color="#F59E0B" />
      <WorkflowNode agentId="critic" x={390} y={80} delay={0.6} />

      {/* Iteration indicator for Dreamer-Critic */}
      <motion.path
        d="M 390 52 Q 330 20 270 52"
        stroke="#EF4444"
        strokeWidth={2}
        fill="none"
        strokeDasharray="5,5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.7 }}
      />
      <text x="330" y="15" textAnchor="middle" fill="#EF4444" fontSize="10" opacity="0.8">
        x2
      </text>

      {/* Phase 3-4: Specs & Architecture */}
      <ConnectionLine x1={418} y1={80} x2={450} y2={150} delay={0.8} color="#10B981" />
      <WorkflowNode agentId="pm" x={480} y={150} delay={0.9} label="Specs" />
      <ConnectionLine x1={508} y1={150} x2={572} y2={150} delay={1.0} color="#10B981" />
      <WorkflowNode agentId="techlead" x={600} y={150} delay={1.1} />

      {/* Iteration indicator for PM-TechLead */}
      <motion.path
        d="M 600 122 Q 540 90 480 122"
        stroke="#3B82F6"
        strokeWidth={2}
        fill="none"
        strokeDasharray="5,5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
      />
      <text x="540" y="85" textAnchor="middle" fill="#3B82F6" fontSize="10" opacity="0.8">
        x2
      </text>

      {/* Phase 5: Test Planning */}
      <ConnectionLine x1={628} y1={150} x2={680} y2={220} delay={1.3} color="#3B82F6" />
      <WorkflowNode agentId="qa" x={710} y={220} delay={1.4} label="Tests" />

      {/* Phase 6: Parallel Development */}
      <motion.path
        d="M 710 248 L 710 280 Q 710 300 650 300"
        stroke="#EC4899"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      />

      {/* Parallel developers */}
      <WorkflowNode agentId="developer" x={150} y={320} delay={1.6} label="Dev 1" />
      <WorkflowNode agentId="developer" x={260} y={320} delay={1.65} label="Dev 2" />
      <WorkflowNode agentId="developer" x={370} y={320} delay={1.7} label="Dev 3" />
      <WorkflowNode agentId="developer" x={480} y={320} delay={1.75} label="Dev 4" />
      <WorkflowNode agentId="developer" x={590} y={320} delay={1.8} label="Dev 5" />

      {/* Connection line spanning developers */}
      <motion.line
        x1={650}
        y1={300}
        x2={120}
        y2={300}
        stroke="#06B6D4"
        strokeWidth={2}
        strokeOpacity={0.3}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.55 }}
      />
      <motion.line
        x1={150}
        y1={300}
        x2={150}
        y2={292}
        stroke="#06B6D4"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.6 }}
      />
      <motion.line
        x1={260}
        y1={300}
        x2={260}
        y2={292}
        stroke="#06B6D4"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.65 }}
      />
      <motion.line
        x1={370}
        y1={300}
        x2={370}
        y2={292}
        stroke="#06B6D4"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.7 }}
      />
      <motion.line
        x1={480}
        y1={300}
        x2={480}
        y2={292}
        stroke="#06B6D4"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.75 }}
      />
      <motion.line
        x1={590}
        y1={300}
        x2={590}
        y2={292}
        stroke="#06B6D4"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
      />

      {/* Phase 7: Verification */}
      <motion.path
        d="M 120 300 Q 80 300 80 280 L 80 220"
        stroke="#EC4899"
        strokeWidth={2}
        fill="none"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.4, delay: 2.0 }}
      />
      <WorkflowNode agentId="qa" x={80} y={190} delay={2.1} label="Verify" />

      {/* Phase 8: Delivery */}
      <ConnectionLine x1={80} y1={162} x2={80} y2={108} delay={2.2} color="#EC4899" />

      {/* Labels */}
      <text x="400" y="385" textAnchor="middle" fill="white" fontSize="14" opacity="0.6">
        Full Pipeline: Complete 8-phase orchestration with iterations and parallel development
      </text>
    </svg>
  )
}
