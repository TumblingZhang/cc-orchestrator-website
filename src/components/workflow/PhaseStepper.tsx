import { workflowPhases } from '../../data/phases'
import { PhaseStep } from './PhaseStep'

export function PhaseStepper() {
  return (
    <div className="flex flex-col gap-6">
      {workflowPhases.map((phase, index) => (
        <PhaseStep
          key={phase.id}
          phase={phase}
          index={index}
          isLast={index === workflowPhases.length - 1}
        />
      ))}
    </div>
  )
}
