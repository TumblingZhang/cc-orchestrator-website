import { motion } from 'framer-motion'
import { PhaseStepper } from '../workflow/PhaseStepper'

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">8 Workflow Phases</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every project flows through our structured phases, ensuring quality
            and alignment from ideation to delivery.
          </p>
        </motion.div>

        <PhaseStepper />
      </div>
    </section>
  )
}
