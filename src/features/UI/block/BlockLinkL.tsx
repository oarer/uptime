'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hoverScale: number
  href: string
  shadow?: boolean
}

export default function BlockLinkL({
  children,
  className,
  hoverScale,
  href,
  shadow,
}: Props) {
  const hoverClass = `hover:scale-${hoverScale}`

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`rounded-2xl border-2 ${className} ${hoverClass} border-cyan-200/45 bg-gradient-to-t from-neutral-100 to-neutral-50 ${shadow !== false ? 'shadow-xl shadow-neutral-300 dark:shadow-neutral-900' : ''} transition-transform duration-700 ease-in-out dark:from-neutral-900/40 dark:to-neutral-950 ${shadow === false ? 'dark:shadow-none' : 'dark:shadow-neutral-900'}`}
    >
      {children}
    </Link>
  )
}
