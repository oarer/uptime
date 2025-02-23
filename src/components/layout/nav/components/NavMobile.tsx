import Image from 'next/image'
import Link from 'next/link'
import { useRef, type Dispatch, type SetStateAction } from 'react'
import { Icon } from '@iconify/react'
import useSvg from '@/hooks/useSvg'
import { links, mobileLinks } from './links'
import useClickOutside from '@/hooks/useClickOutside'

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavMobile({ setIsOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null)
  useClickOutside(menuRef, () => setIsOpen(false))

  const svgPath = useSvg()
  return (
    <div ref={menuRef} className="fixed bottom-0 left-0 top-0 w-[90vw] *:rounded-2xl">
      <div className="m-3 mr-0 flex w-72 grow flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
        <div className="flex items-center gap-3 p-1">
          <Image
            src={`${svgPath}ctime-logo.svg`}
            alt="ctime"
            width={30}
            height={30}
          />
        </div>
        <div className="mt-2 grid gap-4">
          {links.map((link) => (
            <Link
              key={link.iconName}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
            >
              <Icon icon={link.iconName} className="text-2xl" />
              <span className="font-semibold">{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid gap-4">
          {mobileLinks.map((socLink) => (
            <Link
              key={socLink.iconName}
              href={socLink.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
            >
              <Icon icon={socLink.iconName} className="text-2xl" />
              <span className="font-semibold">{socLink.title}</span>
              <Icon icon="lucide:external-link" className="ml-auto size-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

