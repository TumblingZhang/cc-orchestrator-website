import { motion, type HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'light' | 'dark' | 'accent'
  hover?: boolean
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  default: 'glass',
  light: 'glass-light',
  dark: 'glass-dark',
  accent: 'glass-accent',
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ variant = 'default', hover = false, children, className = '', ...props }, ref) => {
    const baseClasses = variantClasses[variant]

    return (
      <motion.div
        ref={ref}
        className={`${baseClasses} ${className}`}
        whileHover={
          hover
            ? {
                y: -4,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
