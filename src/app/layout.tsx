import type { Metadata } from 'next'
import '@/shared/styles/globals.css'
import Nav from '@/components/layout/nav/Nav'
import Providers from '@/app/providers'
import { raleway } from '@/app/fonts'
import FooterLayout from '@/components/layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import CustomToaster from './CustomToaster'
import RootTransitionEffect from '@/shared/components/transitionEffects/PageTransitionEffect'

export const metadata: Metadata = {
  title: 'ContentTime',
  description:
    'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
  openGraph: {
    type: 'website',
    title: 'ContentTime',
    description:
      'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
    url: 'https://content-time.pro',
    siteName: 'ContentTime',
    images: [
      {
        url: 'https://i.imgur.com/xgixuzt.png',
        width: 940,
        height: 540,
        alt: 'ContentTime',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} bg-neutral-100 dark:bg-neutral-950`}
      >
        <Providers>
          <CustomToaster />
          <Nav />
          <RootTransitionEffect>
            {children}
            <FooterLayout />
          </RootTransitionEffect>
        </Providers>
      </body>
    </html>
  )
}
