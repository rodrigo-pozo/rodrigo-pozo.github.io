'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: <SunIcon className="h-4 w-4" /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon className="h-4 w-4" /> },
  { label: 'System', id: 'system', icon: <MonitorIcon className="h-4 w-4" /> },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-md bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
    >
      {THEMES_OPTIONS.map((option) => (
        <button
          key={option.id}
          aria-label={`Switch to ${option.label} theme`}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          data-id={option.id}
          type="button"
        >
          {option.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-100 py-5 dark:border-zinc-800">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Rodrigo Pozo
        </p>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
