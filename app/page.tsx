'use client'

import { Magnetic } from '@/components/ui/magnetic'
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { EMAIL, PROJECTS, SOCIAL_LINKS, UI } from './data'
import { useLanguage } from './language-context'

const FEATURED_PROJECT_SLUGS = [
  'uoct-vehicle-monitoring',
  'lumincity',
  'fusa-net',
]

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.28 }

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h2 className="mb-4 text-sm font-medium tracking-normal text-zinc-500 uppercase dark:text-zinc-500">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      {children}
    </span>
  )
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.25}>
      <a
        href={href}
        className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-900 transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {label}
        {href.startsWith('http') ? (
          <ArrowUpRightIcon className="h-3 w-3" />
        ) : null}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const { language } = useLanguage()
  const copy = UI[language]
  const featuredProjects = FEATURED_PROJECT_SLUGS.map((slug) =>
    PROJECTS.find((project) => project.slug === slug),
  ).filter((project) => project !== undefined)

  return (
    <motion.main
      animate="visible"
      className="space-y-16"
      initial="hidden"
      variants={VARIANTS_CONTAINER}
    >
      <motion.section
        className="space-y-4"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="leading-7 whitespace-pre-line text-zinc-600 dark:text-zinc-400">
          {copy.intro}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <MapPinIcon className="h-4 w-4" />
            {copy.location}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <SocialLink href={`mailto:${EMAIL}`} label={copy.emailButton} />
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </motion.section>

      <Section title={copy.featuredProjects}>
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <Link
              className="group block border-b border-zinc-100 pb-4 last:border-b-0 dark:border-zinc-800"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="mb-1 flex items-center justify-between gap-3">
                <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                  {project.name[language]}
                </h3>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description[language]}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </Link>
          ))}
          <a
            className="inline-flex items-center gap-1 text-sm text-zinc-600 underline underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
            href="https://github.com/dedmu5"
            rel="noopener noreferrer"
            target="_blank"
          >
            {copy.moreProjects}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Section>
    </motion.main>
  )
}
