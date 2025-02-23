import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hoverScale?: number
  clickScale?: number
  onClick: () => void
  shadow?: boolean
  gradient?: boolean
  disabled?:  boolean 
}

export default function ButtonAdaptive({ children, className, hoverScale, clickScale, onClick, shadow, gradient, disabled }: Props) {
  const hoverClass = `hover:scale-${hoverScale}`
  const clickClass = `active:scale-${clickScale}`

  const gradientClass = gradient ? 'bg-gradient-to-t from-neutral-100 to-neutral-50' : '';

  return (
    <button
      className={`rounded-2xl border-2 ${className} ${hoverClass} ${clickClass} border-cyan-200/45 
        ${gradientClass} 
        ${shadow !== false ? 'shadow-xl shadow-neutral-300 dark:shadow-neutral-900' : ''} 
        transition-transform duration-700 ease-in-out dark:from-neutral-900/40 dark:to-neutral-950 ${shadow === false ? 'dark:shadow-none' : 'dark:shadow-neutral-900'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
