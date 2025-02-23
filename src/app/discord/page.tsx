'use client'

import { unbounded } from '@/app/fonts'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const discordLink = 'https://discord.gg/du4s7FAMjs'

export default function DiscordPage() {
  const [timer, setTimer] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          router.push(discordLink);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <div className="relative flex items-center justify-center">
        <Image
          src="/svg/discord.svg"
          alt="discord"
          width={128}
          height={128}
        />
        <div className="absolute size-25 rounded-full bg-cyan-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold dark:text-neutral-100 md:text-3xl`}
      >
        Переадресация на discord.gg
      </h1>
      <div className="flex items-center justify-center gap-3">
        <Icon
          icon="lucide:clock"
          className="md:text-md text-xl dark:text-neutral-300"
        />
        <p
          className={`${unbounded.className} md:text-md text-xl font-semibold dark:text-neutral-300`}
        >
          Через {timer} {timer === 1 ? 'секунду' : 'секунд'}
        </p>
      </div>
    </div>
  );
}
