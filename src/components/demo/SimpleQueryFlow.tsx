import { WorkflowNode } from './WorkflowNode'
import { ConnectionLine } from './ConnectionLine'

export function SimpleQueryFlow() {
  return (
    <svg
      viewBox="0 0 580 240"
      className="w-full h-auto max-h-[300px]"
      aria-label="Simple query workflow: User to Manager to Developer to QA"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <ConnectionLine x1={108} y1={120} x2={192} y2={120} delay={0.2} color="#6366F1" />
      <ConnectionLine x1={248} y1={120} x2={332} y2={120} delay={0.6} color="#06B6D4" />
      <ConnectionLine x1={388} y1={120} x2={472} y2={120} delay={1.0} color="#EC4899" />

      {/* Nodes */}
      <WorkflowNode agentId="user" x={80} y={120} delay={0} />
      <WorkflowNode agentId="manager" x={220} y={120} delay={0.4} active />
      <WorkflowNode agentId="developer" x={360} y={120} delay={0.8} />
      <WorkflowNode agentId="qa" x={500} y={120} delay={1.2} />

      {/* Title */}
      <text x="290" y="220" textAnchor="middle" fill="white" fontSize="14" opacity="0.6">
        Simple Query: Linear workflow for straightforward tasks
      </text>
    </svg>
  )
}
