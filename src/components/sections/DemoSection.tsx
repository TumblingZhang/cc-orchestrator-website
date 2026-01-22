import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface Phase {
  name: string
  agent: string
  icon: string
  color: string
  message: string
  detail: string
}

interface Message {
  agent: string
  icon: string
  color: string
  text: string
  detail: string
  id: number
}

const phases: Phase[] = [
  {
    name: 'Initialize',
    agent: 'Manager',
    icon: '👔',
    color: '#7c3aed',
    message: 'Analyzing request: "Build a REST API for task management"',
    detail: 'Creating project structure and assembling team...'
  },
  {
    name: 'Ideation',
    agent: 'Dreamer',
    icon: '💭',
    color: '#06b6d4',
    message: 'Generating creative solutions and architecture ideas',
    detail: 'Exploring JWT auth, PostgreSQL, Express.js patterns...'
  },
  {
    name: 'Review',
    agent: 'Critic',
    icon: '🔍',
    color: '#ec4899',
    message: 'Validating alignment with user requirements',
    detail: 'Checking scope, security considerations, scalability...'
  },
  {
    name: 'Specification',
    agent: 'PM',
    icon: '📋',
    color: '#22c55e',
    message: 'Creating user stories and acceptance criteria',
    detail: 'Defining endpoints, data models, error handling...'
  },
  {
    name: 'Architecture',
    agent: 'TechLead',
    icon: '🏗️',
    color: '#f97316',
    message: 'Designing system architecture and API contracts',
    detail: 'Planning file structure, middleware, database schema...'
  },
  {
    name: 'Testing',
    agent: 'QA',
    icon: '🧪',
    color: '#a855f7',
    message: 'Writing tests before implementation (TDD)',
    detail: 'Creating unit tests, integration tests, E2E specs...'
  },
  {
    name: 'Development',
    agent: 'Developers',
    icon: '👩‍💻',
    color: '#3b82f6',
    message: 'Implementing components in parallel',
    detail: 'Building auth, routes, controllers, models...'
  },
  {
    name: 'Verification',
    agent: 'QA',
    icon: '✅',
    color: '#10b981',
    message: 'Running all tests and verifying acceptance criteria',
    detail: 'All 47 tests passing. Coverage: 94%'
  },
]

function WorkflowDemo() {
  const [activePhase, setActivePhase] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActivePhase(prev => (prev + 1) % phases.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const currentPhase = phases[activePhase]
    setMessages(prev => [
      {
        agent: currentPhase.agent,
        icon: currentPhase.icon,
        color: currentPhase.color,
        text: currentPhase.message,
        detail: currentPhase.detail,
        id: Date.now()
      },
      ...prev.slice(0, 4)
    ])
  }, [activePhase])

  const handleReset = () => {
    setActivePhase(0)
    setMessages([])
  }

  return (
    <div className="relative">
      {/* Phase Timeline */}
      <div className="flex items-center justify-between mb-8 md:mb-12 px-2 overflow-x-auto pb-4">
        {phases.map((phase, idx) => (
          <div
            key={phase.name}
            className="flex flex-col items-center cursor-pointer group flex-shrink-0"
            onClick={() => {
              setActivePhase(idx)
              setIsPlaying(false)
            }}
          >
            <div
              className={`
                w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl
                transition-all duration-500 border-2
                ${activePhase === idx
                  ? 'scale-110 md:scale-125 border-white/50'
                  : activePhase > idx
                    ? 'border-white/20 opacity-60'
                    : 'border-white/10 opacity-40 group-hover:opacity-70'}
              `}
              style={{
                background: activePhase === idx ? `${phase.color}40` : 'transparent',
                boxShadow: activePhase === idx ? `0 0 30px ${phase.color}60` : 'none'
              }}
            >
              {phase.icon}
            </div>
            <span className={`
              mt-2 text-[10px] md:text-xs font-medium transition-opacity duration-300
              ${activePhase === idx ? 'opacity-100' : 'opacity-40'}
            `}>
              {phase.name}
            </span>
          </div>
        ))}
      </div>

      {/* Active Agent Display */}
      <GlassCard className="relative h-auto md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${phases[activePhase].color}40 0%, transparent 70%)`
          }}
        />

        <div className="relative h-full flex flex-col md:flex-row">
          {/* Agent Info */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl"
                style={{
                  background: `${phases[activePhase].color}30`,
                  boxShadow: `0 0 40px ${phases[activePhase].color}40`
                }}
              >
                {phases[activePhase].icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{phases[activePhase].agent}</h3>
                <p className="text-white/50 text-sm">Phase {activePhase + 1} of {phases.length}</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-white/80 mb-2">{phases[activePhase].message}</p>
            <p className="text-sm text-white/50 font-mono">{phases[activePhase].detail}</p>
          </div>

          {/* Message Stream */}
          <div className="w-full md:w-72 lg:w-80 border-t md:border-t-0 md:border-l border-white/10 p-4 overflow-hidden">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Activity Log</p>
            <div className="space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={msg.id}
                  className={`
                    p-3 rounded-xl border border-white/5 bg-white/5
                    transition-all duration-500
                    ${idx === 0 ? 'opacity-100 translate-y-0' : 'opacity-40'}
                  `}
                  style={{
                    transform: `translateY(${idx * 4}px)`,
                    borderLeftColor: msg.color,
                    borderLeftWidth: '3px'
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{msg.icon}</span>
                    <span className="text-xs font-medium text-white/70">{msg.agent}</span>
                  </div>
                  <p className="text-xs text-white/50 line-clamp-2">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${((activePhase + 1) / phases.length) * 100}%`,
              background: `linear-gradient(90deg, ${phases[0].color}, ${phases[activePhase].color})`
            }}
          />
        </div>
      </GlassCard>

      {/* Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10
                     transition-colors text-sm font-medium flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" /> Play
            </>
          )}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10
                     transition-colors text-sm font-medium flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  )
}

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-32 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            See how 8 specialized agents collaborate to transform your idea into production-ready code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WorkflowDemo />
        </motion.div>
      </div>
    </section>
  )
}
