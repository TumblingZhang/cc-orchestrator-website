import type { WorkflowPhase } from '../types/workflow'

export const workflowPhases: WorkflowPhase[] = [
  {
    id: 1,
    name: 'Init',
    description: 'Manager analyzes the request and gets user approval',
    agents: ['manager'],
  },
  {
    id: 2,
    name: 'Requirements',
    description: 'Dreamer ideates features, Critic ensures alignment',
    agents: ['dreamer', 'critic'],
  },
  {
    id: 3,
    name: 'Specifications',
    description: 'PM creates user stories, TechLead assesses feasibility',
    agents: ['pm', 'techlead'],
  },
  {
    id: 4,
    name: 'Architecture',
    description: 'TechLead designs system architecture and components',
    agents: ['techlead'],
  },
  {
    id: 5,
    name: 'Test Planning',
    description: 'QA writes tests BEFORE development begins',
    agents: ['qa'],
  },
  {
    id: 6,
    name: 'Development',
    description: 'Multiple developers implement features in parallel',
    agents: ['developer'],
  },
  {
    id: 7,
    name: 'Verification',
    description: 'QA runs tests and verifies acceptance criteria',
    agents: ['qa'],
  },
  {
    id: 8,
    name: 'Delivery',
    description: 'Manager presents completed work to user',
    agents: ['manager'],
  },
]
