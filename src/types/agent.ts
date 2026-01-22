import type { LucideIcon } from 'lucide-react'

export interface Agent {
  id: string
  name: string
  role: string
  description: string
  icon: LucideIcon
  color: string
}
