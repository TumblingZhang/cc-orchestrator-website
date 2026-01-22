import { Navigation } from './components/layout/Navigation'
import { HeroSection } from './components/sections/HeroSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { AgentsSection } from './components/sections/AgentsSection'
import { DemoSection } from './components/sections/DemoSection'
import { WorkflowSection } from './components/sections/WorkflowSection'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />

      <main id="main">
        <HeroSection />
        <FeaturesSection />
        <AgentsSection />
        <DemoSection />
        <WorkflowSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
