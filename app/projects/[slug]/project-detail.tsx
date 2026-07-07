'use client'

import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Maximize2Icon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Language, Project } from '@/app/data'
import { UI } from '@/app/data'
import { useLanguage } from '@/app/language-context'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import { useState } from 'react'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      {children}
    </span>
  )
}

function ImageGrid({
  images,
  language,
}: {
  images: Project['images']
  language: Language
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const hasMultipleImages = images.length > 1
  const activeCaption =
    activeImage?.caption?.[language] ?? activeImage?.alt[language]

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  function showNext() {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  if (!activeImage) {
    return null
  }

  const imageFitClass =
    activeImage.fit === 'contain' ? 'object-contain p-3' : 'object-cover'

  return (
    <div className="space-y-3">
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.28,
        }}
      >
        <figure className="space-y-2">
          <div className="group relative overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
            <MorphingDialogTrigger className="block">
              <Image
                alt={activeImage.alt[language]}
                className={`aspect-[16/9] w-full bg-zinc-50 dark:bg-zinc-900 ${imageFitClass}`}
                height={675}
                priority={activeIndex === 0}
                src={activeImage.src}
                width={1200}
              />
              <span className="absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors group-hover:bg-zinc-950 group-hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-950">
                <Maximize2Icon className="h-4 w-4" />
              </span>
            </MorphingDialogTrigger>

            {hasMultipleImages ? (
              <>
                <button
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
                  onClick={showPrevious}
                  type="button"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
                  onClick={showNext}
                  type="button"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </>
            ) : null}
          </div>
          <figcaption className="flex items-center justify-between gap-3 text-sm text-zinc-500">
            <span>{activeCaption}</span>
            {hasMultipleImages ? (
              <span className="shrink-0">
                {activeIndex + 1} / {images.length}
              </span>
            ) : null}
          </figcaption>
        </figure>

        <MorphingDialogContainer>
          <MorphingDialogContent className="relative max-h-[90vh] w-[min(92vw,1200px)] rounded-lg bg-white p-2 shadow-2xl dark:bg-zinc-950">
            <MorphingDialogImage
              alt={activeImage.alt[language]}
              className="max-h-[84vh] w-full rounded-md object-contain"
              src={activeImage.src}
            />
            {hasMultipleImages ? (
              <>
                <button
                  aria-label="Previous image"
                  className="absolute top-1/2 left-4 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
                  onClick={showPrevious}
                  type="button"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute top-1/2 right-4 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
                  onClick={showNext}
                  type="button"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-1/2 rounded-md bg-white/90 px-2 py-1 text-xs text-zinc-600 shadow-sm backdrop-blur dark:bg-zinc-950/90 dark:text-zinc-300">
                  {activeIndex + 1} / {images.length}
                </div>
              </>
            ) : null}
            <MorphingDialogClose className="top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-950" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>

      {hasMultipleImages ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              aria-label={`Show image ${index + 1}`}
              className="shrink-0 rounded-md focus:ring-2 focus:ring-zinc-400 focus:outline-none"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image
                alt={image.alt[language]}
                className={`h-16 w-28 rounded-md border bg-zinc-50 transition-opacity dark:bg-zinc-900 ${
                  image.fit === 'contain' ? 'object-contain p-1' : 'object-cover'
                } ${
                  index === activeIndex
                    ? 'border-zinc-950 opacity-100 dark:border-zinc-100'
                    : 'border-zinc-100 opacity-55 hover:opacity-85 dark:border-zinc-800'
                }`}
                height={90}
                src={image.src}
                width={160}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
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
            {project.name[language]}
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

      {project.sections ? (
        <div className="space-y-12">
          {project.sections.map((section) => (
            <section className="space-y-5" key={section.title.en}>
              <div className="space-y-3">
                <h2 className="text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
                  {section.title[language]}
                </h2>
                <p className="leading-7 whitespace-pre-line text-zinc-700 dark:text-zinc-300">
                  {section.description[language]}
                </p>
                {section.stack && section.stack.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {section.stack.map((tech) => (
                      <Pill key={tech}>{tech}</Pill>
                    ))}
                  </div>
                ) : null}
              </div>
              {section.images && section.images.length > 0 ? (
                <ImageGrid images={section.images} language={language} />
              ) : null}
            </section>
          ))}
          {project.metrics ? (
            <section>
              <h2 className="mb-3 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
                {copy.metrics}
              </h2>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.metrics[language]}
              </p>
            </section>
          ) : null}
          {project.showGlobalStack ? (
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
          ) : null}
          {project.images.length > 0 ? (
            <section>
              <h2 className="mb-3 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
                {copy.images}
              </h2>
              <ImageGrid images={project.images} language={language} />
            </section>
          ) : null}
        </div>
      ) : (
        <>
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
                {project.metrics[language]}
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
              <ImageGrid images={project.images} language={language} />
            ) : (
              <div className="rounded-lg border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
                {copy.noImages}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  )
}
