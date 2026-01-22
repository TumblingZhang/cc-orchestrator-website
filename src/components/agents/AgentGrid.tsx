import { agents } from '../../data/agents'
import { AgentCard } from './AgentCard'

export function AgentGrid() {
  return (
    <div
      data-testid="agent-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {agents.map((agent, index) => (
        <AgentCard key={agent.id} agent={agent} index={index} />
      ))}
    </div>
  )
}
