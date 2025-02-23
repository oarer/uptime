'use client'
import { unbounded } from '@/app/fonts'
import BlockLinkR from '@/features/UI/block/BlockLinkR'
import useClickOutside from '@/hooks/useClickOutside'
import { meQuery } from '@/queries/Me'
import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLogoutMutation from '@/hooks/useLogoutMutation'

const links = [
  {
    link: '/@me',
    title: 'Личный кабинет',
    iconName: 'mingcute:classify-add-2-line',
  },
  {
    link: '/@me/purchase',
    title: 'Пополнить баланс',
    iconName: 'lucide:credit-card',
  },
  {
    link: '/@me/settings/tlineid',
    title: 'Настройки аккаунта',
    iconName: 'lucide:settings',
  },
]

export default function Me() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickOutside(menuRef, (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return
    }
    setIsMenuOpen(false)
  })

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const { mutate: logoutMutate } = useLogoutMutation()
  const { data } = useQuery(meQuery)

  return (
    <>
      {!data ? (
        <BlockLinkR
          href="/auth"
          hoverScale={98}
          className="flex gap-2 px-4 py-2"
        >
          <Icon
            icon="lucide:log-in"
            className="text-2xl dark:text-neutral-100"
          />
          <p className="hidden font-[Raleway] font-semibold dark:text-neutral-100 lg:flex">
            Авторизация
          </p>
        </BlockLinkR>
      ) : (
        <>
          <button onClick={toggleMenu} ref={buttonRef}>
            {!data?.profile?.linked ? (
              <Image
                className="rounded-2xl border-2 border-cyan-200/45 duration-700 ease-in-out hover:scale-95"
                width={52}
                height={52}
                alt="Your avatar"
                src={`${data?.avatar}`}
              />
            ) : (
              <Image
                className="rounded-2xl border-2 border-cyan-200/45 duration-700 ease-in-out hover:scale-95"
                width={52}
                height={52}
                alt="Your avatar"
                src={`${process.env.NEXT_PUBLIC_API_URL}/v1/head/${data?.profile?.provider}/${data?.profile?.nick}`}
              />
            )}
          </button>

          <div className="relative" ref={menuRef}>
            <div
              className={`gird absolute right-[30%] top-14 z-[2] min-w-64 origin-top-right gap-4 rounded-2xl border-2 border-neutral-800 bg-neutral-100 p-4 shadow-md transition-all duration-300 ease-in-out dark:border-neutral-500 dark:bg-neutral-950 dark:text-neutral-100 ${
                isMenuOpen
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 p-4">
                {!data?.profile?.linked ? (
                  <Image
                    className="rounded-2xl border-2 border-neutral-800 dark:border-neutral-500"
                    width={52}
                    height={52}
                    alt="Your avatar"
                    src={`${data?.avatar}`}
                  />
                ) : (
                  <Image
                    className="rounded-2xl border-2 border-neutral-800 dark:border-neutral-500"
                    width={52}
                    height={52}
                    alt="Your avatar"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/v1/head/${data?.profile?.provider}/${data?.profile?.nick}`}
                  />
                )}
                <div className="grid justify-end">
                  <p
                    className={`${unbounded.className} text-md font-semibold text-neutral-600 dark:text-neutral-200`}
                  >
                    {data?.profile?.nick ? data?.profile?.nick : data?.username}
                  </p>
                  <p className="text-md font-medium text-neutral-500 dark:text-neutral-300">
                    {data?.cTime?.balance}₽
                  </p>
                </div>
              </div>
              <div className="h-0.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800/60" />
              <div className="grid gap-2 p-4">
                {links.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => router.push(link.link)}
                    className="flex items-center gap-2 transition-all duration-500 hover:scale-101 hover:opacity-70 active:opacity-50"
                  >
                    <Icon icon={link.iconName} className="text-2xl" />
                    <p className="text-[15px] font-semibold text-neutral-600 dark:text-neutral-300">
                      {link.title}
                    </p>
                  </button>
                ))}
                <button
                  onClick={() => logoutMutate()}
                  className="flex items-center gap-2 transition-all duration-500 hover:scale-101 hover:opacity-70 active:opacity-50"
                >
                  <Icon
                    icon="lucide:log-out"
                    className="text-2xl text-neutral-600 dark:text-neutral-300"
                  />
                  <p className="text-[15px] font-semibold text-neutral-600 dark:text-neutral-300">
                    Выйти из аккаунта
                  </p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
