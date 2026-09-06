import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  const style: CSSProperties | undefined =
    delay != null ? { transitionDelay: `${delay}ms` } : undefined
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}