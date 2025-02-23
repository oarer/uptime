import dynamic from 'next/dynamic'
import { raleway } from '@/app/fonts'
import Main from '@/components/welcomePage/Main'
import Seasons from '@/components/welcomePage/Seasons'
import Community from '@/components/welcomePage/Community'
import Events from '@/components/welcomePage/Events'
import Price from '@/components/welcomePage/Price'
import Reviews from '@/components/welcomePage/Review'

const LazyAuthCheck = dynamic(
  () => import('@/components/welcomePage/components/AuthCheck'),
  { loading: () => <></> },
)

export default function Home() {
  return (
    <main
      className={`${raleway.className} mx-auto mt-32 min-h-screen max-w-[85rem] px-8 text-neutral-800 dark:text-neutral-200/70`}
    >
      Hi!
    </main>
  )
}

