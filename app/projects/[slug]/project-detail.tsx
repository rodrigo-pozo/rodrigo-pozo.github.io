'use client'

import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/app/data'
import { UI } from '@/app/data'
import { useLanguage } from '@/app/language-context'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      {children}
    </span>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage()
  const copy = UI[language]

  return (
    <main className="space-y-12">
      <div className="space-y-6">
        <Link
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
          href="/"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          {copy.back}
        </Link>

        <div className="space-y-3">
          <h1 className="text-2xl font-medium text-zinc-950 dark:text-zinc-50">
            {project.name}
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {project.summary[language]}
          </p>
          {project.link ? (
            <a
              className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {copy.repository}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>

      <section className="space-y-3">
        {project.details[language].map((paragraph) => (
          <p
            className="leading-7 text-zinc-700 dark:text-zinc-300"
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {project.metrics ? (
        <section>
          <h2 className="mb-3 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
            {copy.metrics}
          </h2>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.metrics}
          </p>
        </section>
      ) : null}

      <section>
        <h2 className="mb-3 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
          {copy.stack}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
          {copy.images}
        </h2>
        {project.images.length > 0 ? (
          <div className="grid gap-4">
            {project.images.map((image) => (
              <figure key={image.src} className="space-y-2">
                <Image
                  alt={image.alt[language]}
                  className="w-full rounded-lg border border-zinc-100 object-cover dark:border-zinc-800"
                  height={675}
                  src={image.src}
                  width={1200}
                />
                {image.caption ? (
                  <figcaption className="text-sm text-zinc-500">
                    {image.caption[language]}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
            {copy.noImages}
          </div>
        )}
      </section>
    </main>
  )
}
