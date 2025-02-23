'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export default function CustomToaster() {
  const { theme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark' | 'system'>('system')

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setSystemTheme(matchMedia.matches ? 'dark' : 'light')
    }

    matchMedia.addEventListener('change', handleChange)
    handleChange()

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [])

  const effectiveTheme = theme === 'system' ? systemTheme : theme

  return (
    <Toaster
      toastOptions={{
        style: {
          borderRadius: '16px',
          border: effectiveTheme === 'dark' ? '2px solid #52767a' : '2px solid #d1f5f9',
        },
        success: {
          duration: 5000,
          iconTheme: {
            primary: '#51bf3b',
            secondary: effectiveTheme === 'dark' ? 'black' : 'white',
          },
          style: {
            background: effectiveTheme === 'dark' ? '#1c1c1c' : '#f1f5f9',
            color: effectiveTheme === 'dark' ? 'white' : 'black',
            boxShadow:
              effectiveTheme === 'dark'
                ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                : '0px 4px 6px rgba(0, 0, 0, 0.05)',
          },
        },
        error: {
          duration: 4000,
          iconTheme: {
            primary: '#ef4444',
            secondary: effectiveTheme === 'dark' ? 'black' : 'white',
          },
          style: {
            background: effectiveTheme === 'dark' ? '#1c1c1c' : '#f1f5f9',
            color: effectiveTheme === 'dark' ? 'white' : 'black',
            boxShadow:
              effectiveTheme === 'dark'
                ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                : '0px 4px 6px rgba(0, 0, 0, 0.05)',
          },
        },
        loading: {
          duration: 5000,
          style: {
            background: effectiveTheme === 'dark' ? '#1c1c1c' : '#f1f5f9',
            color: effectiveTheme === 'dark' ? 'white' : 'black',
            boxShadow:
              effectiveTheme === 'dark'
                ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                : '0px 4px 6px rgba(0, 0, 0, 0.05)',
          },
        },
      }}
    />
  )
}
