'use client'

import Link from 'next/link'
import { unbounded } from '@/app/fonts'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import BlockLinkL from '@/features/UI/block/BlockLinkL'

const links = [
  {
    title: 'Условия использования',
    href: 'https://wiki.content-time.pro/server/legal/terms-of-service',
    iconName: 'lucide:book-open',
  },
  {
    title: 'Политика конфиденциальности',
    href: 'https://wiki.content-time.pro/server/legal/privacy-policy',
    iconName: 'lucide:shield-check',
  },
  {
    title: 'Поддержка',
    href: '/discord',
    iconName: 'lucide:headset',
  },
]

function Footer() {
  return (
    <footer className="outline outline-2 outline-neutral-800/40">
      <div className="mx-auto px-8 py-12 font-semibold xl:max-w-[85rem]">
        <Link
          href="/"
          className="text-xl duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50 dark:text-neutral-100"
        >
          <h1 className={`${unbounded.className} font-semibold`}>
            ContentTime
          </h1>
        </Link>
        <p className="mt-4 opacity-80 dark:text-neutral-200">
          Copyright © ContentTime, oarer & kryptonfox 2025. Все права защищены.
          Скачивание, копирование и редактирование запрещено!
        </p>
        <p className="mt-4 opacity-75 dark:text-neutral-200">
          <span>Сайт сделан </span>
          <Link
            href="https://oarer.space"
            target="_blank"
            className="underline-sky-400 text-cyan-600 underline decoration-sky-400 underline-offset-2 opacity-100 duration-300 hover:text-sky-600"
          >
            @oarer
          </Link>
          <span> и </span>
          <Link
            href="https://krfox.ru/"
            target="_blank"
            className="underline-sky-400 text-cyan-600 underline decoration-sky-400 underline-offset-2 opacity-100 duration-300 hover:text-sky-600"
          >
            @kryptonfox
          </Link>
        </p>
        <p className="my-4 opacity-60 dark:text-neutral-200">
          Not an official Minecraft service. Not approved by or associated with
          Mojang or MICR
        </p>
        <p className="my-4 opacity-60 dark:text-neutral-200">
          Обработка платежей: Косов Артём Валерьевич, ИНН: 773125930321
        </p>
        <div className="flex flex-wrap gap-4 *:w-full *:lg:w-fit">
          {links.map((link) => (
            <BlockLinkL
              hoverScale={96}
              key={link.iconName}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-2 shadow-md`}
            >
              <Icon icon={link.iconName} className="text-2xl" />
              <span className="font-semibold">{link.title}</span>
            </BlockLinkL>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default function FooterLayout() {
  const pathname = usePathname()

  return pathname !== '/discord' && pathname !== '/auth' && <Footer />
}
