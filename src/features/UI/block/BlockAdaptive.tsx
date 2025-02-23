import React, { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { unbounded } from '@/app/fonts'

interface Props {
  children: ReactNode
  hoverScale?: number
  className?: string
  title?: string
}

const BlockAdaptive = forwardRef<HTMLDivElement, Props>(({
  children,
  className,
  title,
  hoverScale,
}: Props, ref) => {
  const hoverClass = `hover:scale-${hoverScale}`

  return (
    <div
      ref={ref}
      className={`rounded-2xl border-2 ${className} border-cyan-200/45 bg-gradient-to-t from-neutral-100 to-neutral-50 shadow-xl shadow-neutral-300 transition-transform duration-700 ease-in-out ${hoverClass} dark:from-neutral-900/40 dark:to-neutral-950 dark:shadow-neutral-900`}
    >
      {title && (
        <h1
          className={`${unbounded.className} text-lg font-medium text-neutral-800 dark:text-neutral-100`}
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  )
})

BlockAdaptive.displayName = 'BlockAdaptive'

export default BlockAdaptive
