'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  children: ReactNode
  className?: string
  hoverScale: number
  clickScale?: number
  href: string
  shadow?: boolean
}

export default function BlockLinkR({
  children,
  className,
  hoverScale,
  clickScale,
  href,
  shadow,
}: Props) {
  const hoverClass = `hover:scale-${hoverScale}`
  const clickClass = `active:scale-${clickScale}`
  const router = useRouter()

  return (
    <button
      className={`rounded-2xl border-2 ${className} ${hoverClass} ${clickClass} border-cyan-200/45 bg-gradient-to-t from-neutral-100 to-neutral-50 ${shadow !== false ? 'shadow-xl shadow-neutral-300 dark:shadow-neutral-900' : ''} transition-transform duration-700 ease-in-out dark:from-neutral-900/40 dark:to-neutral-950 ${shadow === false ? 'dark:shadow-none' : 'dark:shadow-neutral-900'}`}
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  )
}
