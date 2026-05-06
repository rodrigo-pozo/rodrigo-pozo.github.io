'use client'

import { TextEffect } from '@/components/ui/text-effect'
import { UI, type Language } from './data'
import { useLanguage } from './language-context'

export function Header() {
  const { language, setLanguage } = useLanguage()

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
          {UI[language].tagline}
        </TextEffect>
      </div>
      <div className="flex rounded-md border border-zinc-200 p-0.5 text-xs dark:border-zinc-800">
        {(['en', 'es'] as Language[]).map((option) => (
          <button
            aria-pressed={language === option}
            className={`rounded px-2 py-1 transition-colors ${
              language === option
                ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950'
                : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100'
            }`}
            key={option}
            onClick={() => setLanguage(option)}
            type="button"
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  )
}
