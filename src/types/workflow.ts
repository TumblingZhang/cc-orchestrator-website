export interface WorkflowNode {
  id: string
  agent: string
  x: number
  y: number
}

export interface WorkflowConnection {
  from: string
  to: string
  animated?: boolean
}

export interface WorkflowPhase {
  id: number
  name: string
  description: string
  agents: string[]
}
