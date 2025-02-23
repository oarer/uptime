'use client'

import { unbounded, raleway } from '@/app/fonts'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useSvg from '@/hooks/useSvg'

const buttonClass =
  'rounded-2xl border-2 border-cyan-200/45 bg-gradient-to-t from-neutral-100 to-neutral-50 shadow-xl shadow-neutral-300 transition-transform duration-700 ease-in-out hover:scale-96 dark:from-neutral-900/40 dark:to-neutral-950 dark:shadow-neutral-900'

export default function NotFound() {
  const svgPath = useSvg()
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <div className="relative flex items-center justify-center">
        <Image src={`${svgPath}ghost.svg`} alt="not found" width={128} height={128} />
        <div className="absolute size-25 rounded-full bg-cyan-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold dark:text-neutral-100`}
      >
        Упсс...
      </h1>
      <p
        className={`${unbounded.className} text-center text-2xl font-semibold dark:text-neutral-100/90`}
      >
        Страница не найдена
      </p>
      <button
        className={`${buttonClass} m-2 flex items-center gap-2 p-3`}
        onClick={() => router.push('/')}
      >
        <Icon
          icon="lucide:home"
          className="md:text-md text-2xl dark:text-neutral-300"
        />
        <p
          className={`${raleway.className} md:text-md text-xl font-semibold dark:text-neutral-300`}
        >
          На главную
        </p>
      </button>
    </div>
  )
}

