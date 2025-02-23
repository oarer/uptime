'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import ThemeToggle from '@/features/theme/ChangeTheme'
import Me from './components/Me'
import Image from 'next/image'
import useClickOutside from '@/hooks/useClickOutside'
import NavMobile from './components/NavMobile'
import useSvg from '@/hooks/useSvg'
import { pcLinks } from './components/links'

export default function Nav() {
  const svgPath = useSvg()
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)
  useClickOutside(navbarRef, () => setIsOpen(false))

  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(!!latest)
  })

  return (
    <>
      <motion.header
        className={`fixed top-0 z-[3] w-full items-center text-neutral-700 outline outline-2 outline-neutral-800/40 backdrop-blur-md dark:bg-neutral-950/80 dark:text-neutral-100 ${isScrolled ? 'outline-neutral-700/40' : ''}`}
        initial={{ paddingTop: '1.3rem', paddingBottom: '1.3rem' }}
        animate={{
          paddingTop: isScrolled ? '0.70rem' : '1.3rem',
          paddingBottom: isScrolled ? '0.70rem' : '1.3rem',
        }}
        transition={{ duration: 0.4 }}
      >
        <nav className="mx-auto xl:max-w-[84rem]">
          <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <Icon icon="lucide:menu" className="text-3xl" />
              </button>
            </div>
            <div className="grid grid-flow-col items-center justify-start gap-3">
              <Link href="/" className="justify-center">
                <Image
                  src={`${svgPath}ctime-logo.svg`}
                  alt="logo"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <nav className="hidden gap-8 lg:flex">
              {pcLinks.map((linkGroup, index) => (
                <div key={index} className="flex gap-8">
                  {linkGroup.map((link) => (
                    <Link
                      key={link.iconName}
                      href={link.href}
                      className="flex items-center gap-2 duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
                    >
                      <Icon icon={link.iconName} className="text-2xl" />
                      {link.title && (
                        <span className="font-semibold">{link.title}</span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
            <div className="relative flex items-center justify-end gap-3">
              <div className="relative flex items-center">
                <ThemeToggle />
              </div>
              <div className="relative flex items-center">
                <Me />
              </div>
            </div>
          </div>
        </nav>
        {isOpen && <NavMobile setIsOpen={setIsOpen} />}
      </motion.header>
      {isOpen && <div className="fixed inset-0 z-[2] bg-black/50" />}
    </>
  )
}
