import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { SimpleQueryFlow } from './SimpleQueryFlow'
import { MultiVersionFlow } from './MultiVersionFlow'
import { FullPipelineFlow } from './FullPipelineFlow'
import { CosmicPipeline3D } from './CosmicPipeline3D'

// Loading placeholder for 3D component
function Loading3D() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-dark-900/50 rounded-xl">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">Loading 3D visualization...</p>
      </div>
    </div>
  )
}

// Wrapper for 3D with Suspense
function Cosmic3DWrapper() {
  return (
    <Suspense fallback={<Loading3D />}>
      <CosmicPipeline3D />
    </Suspense>
  )
}

const tabs = [
  { id: 'simple', label: 'Simple Query', component: SimpleQueryFlow },
  { id: 'multi', label: 'Multi-Version', component: MultiVersionFlow },
  { id: 'full', label: 'Full Pipeline', component: FullPipelineFlow },
  { id: 'cosmic', label: 'Cosmic 3D', component: Cosmic3DWrapper },
]

export function DemoTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextIndex = (index + 1) % tabs.length
      setActiveTab(nextIndex)
      const nextTab = document.querySelector(`[data-tab-index="${nextIndex}"]`) as HTMLElement
      nextTab?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevIndex = (index - 1 + tabs.length) % tabs.length
      setActiveTab(prevIndex)
      const prevTab = document.querySelector(`[data-tab-index="${prevIndex}"]`) as HTMLElement
      prevTab?.focus()
    }
  }

  const ActiveComponent = tabs[activeTab].component

  return (
    <div className="w-full">
      {/* Tab Bar */}
      <GlassCard className="inline-flex p-1.5 mb-8 mx-auto relative">
        <div role="tablist" className="flex gap-1 relative">
          {/* Animated indicator */}
          <motion.div
            className="absolute top-0 bottom-0 bg-gradient-to-r from-indigo-500/50 to-blue-500/50 rounded-lg"
            layoutId="activeTab"
            initial={false}
            animate={{
              left: `${activeTab * (100 / tabs.length)}%`,
              width: `${100 / tabs.length}%`,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />

          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              data-tab-index={index}
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                relative z-10 px-4 md:px-6 py-2 text-sm md:text-base font-medium rounded-lg
                transition-colors duration-200
                ${activeTab === index ? 'text-white' : 'text-white/60 hover:text-white/80'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Tab Content */}
      <GlassCard className="p-6 md:p-8 min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={tabs[activeTab].id}
            role="tabpanel"
            id={`tabpanel-${tabs[activeTab].id}`}
            aria-labelledby={`tab-${tabs[activeTab].id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </GlassCard>
    </div>
  )
}
