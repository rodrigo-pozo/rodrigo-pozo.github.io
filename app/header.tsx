'use client'

import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-12 flex items-start justify-between gap-6">
      <div>
        <h1 className="text-xl font-medium text-zinc-950 dark:text-zinc-50">
          Rodrigo Pozo Lagos
        </h1>
        <TextEffect
          as="p"
          preset="fade"
          per="word"
          className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
          delay={0.2}
        >
          Data Scientist · M.Sc. Candidate · Santiago, Chile
        </TextEffect>
      </div>
    </header>
  )
}
