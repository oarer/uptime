import { type FC, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import useClickOutside from '@/hooks/useClickOutside'

interface Theme {
  name: string
  title: string
  iconName: string
}

const themes: Theme[] = [
  { name: 'system', title: 'Системная', iconName: 'lucide:laptop-minimal' },
  { name: 'dark', title: 'Тёмная', iconName: 'lucide:moon-star' },
  { name: 'light', title: 'Светлая', iconName: 'lucide:sun' },
]

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)
  useClickOutside(menuRef, () => setIsMenuOpen(false))

  const handleChange = (theme: string) => {
    setTheme(theme)
    setIsMenuOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative flex items-center justify-center dark:text-neutral-200/90"
      >
        <div
          className={`absolute transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {theme === 'system' ? (
            <Icon icon="lucide:laptop-minimal" className="text-2xl" />
          ) : theme === 'dark' ? (
            <Icon icon="lucide:moon-star" className="text-2xl" />
          ) : (
            <Icon icon="lucide:sun" className="text-2xl" />
          )}
        </div>
        <div
          className={`transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Icon icon="material-symbols:close" className="text-3xl" />
        </div>
      </button>
      <div
        className={`absolute right-0 z-20 mt-5 flex origin-top-right flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-100 p-6 transition-opacity duration-500 dark:border-neutral-500 dark:bg-neutral-950 dark:text-neutral-100 ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => handleChange(theme.name)}
            className="flex items-center gap-2 transition-opacity duration-500 hover:opacity-70 active:opacity-50"
          >
            <Icon icon={theme.iconName} className="text-2xl" />
            <p>{theme.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeToggle
