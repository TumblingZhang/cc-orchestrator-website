import { GlassCard } from '../ui/GlassCard'

export function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <GlassCard className="p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl gradient-text">CC</span>
              <span className="text-white/60">Orchestrator</span>
            </div>

            <p className="text-white/50 text-sm">
              Built with Claude Code
            </p>

            <p className="text-white/40 text-sm">
              The Luminous Flow v1.0
            </p>
          </div>
        </GlassCard>
      </div>
    </footer>
  )
}
