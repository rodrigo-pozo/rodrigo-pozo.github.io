'use client'

import { Magnetic } from '@/components/ui/magnetic'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { EMAIL, PROJECTS, SOCIAL_LINKS, WORK_EXPERIENCE } from './data'

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
  return (
    <motion.main
      animate="visible"
      className="space-y-16"
      initial="hidden"
      variants={VARIANTS_CONTAINER}
    >
      <motion.section
        className="grid gap-6 sm:grid-cols-[112px_1fr]"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Image
          alt="Rodrigo Pozo Lagos"
          className="h-28 w-28 rounded-lg object-cover grayscale"
          height={224}
          priority
          src="/profile.jpg"
          width={224}
        />
        <div className="space-y-4">
          <p className="text-lg leading-7 text-zinc-900 dark:text-zinc-100">
            Data Scientist y M.Sc. Candidate en PUC Chile. Trabajo en visión por
            computadora, deep learning multimodal y despliegue edge-to-cloud.
          </p>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            También desarrollo software full-stack con React, Next.js, Electron
            y Node.js. Me interesan los sistemas ML que pasan de prototipo a
            operación: cámaras, colas, cloud, edge y métricas verificables.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-4 w-4" />
              Santiago, Chile
            </span>
            <span>·</span>
            <a
              className="underline underline-offset-4"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <Section title="Experiencia">
        <div className="space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <article
              className="relative overflow-hidden rounded-lg bg-zinc-200/60 p-px dark:bg-zinc-800"
              key={`${job.company}-${job.role}`}
            >
              <Spotlight
                className="from-zinc-950 via-zinc-700 to-zinc-500 blur-2xl dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500"
                size={72}
              />
              <div className="relative rounded-lg bg-white p-4 dark:bg-zinc-950">
                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row">
                  <div>
                    <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                      {job.role}
                    </h3>
                    <p className="text-sm text-zinc-500">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{job.period}</p>
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {job.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Proyectos">
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <article
              className="border-b border-zinc-100 pb-4 last:border-b-0 dark:border-zinc-800"
              key={project.name}
            >
              <div className="mb-1 flex flex-wrap items-center gap-2">
                {project.link ? (
                  <a
                    className="group inline-flex items-center gap-1 font-medium text-zinc-950 dark:text-zinc-50"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.name}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                    {project.name}
                  </h3>
                )}
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              {project.metrics ? (
                <p className="mt-1 text-sm text-zinc-500">{project.metrics}</p>
              ) : null}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Noticia">
        <div className="rounded-lg border border-zinc-100 p-4 dark:border-zinc-800">
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              Sep 2024:
            </span>{' '}
            1er lugar en Data Challenge in the Cloud, hackathon organizado en
            Google Chile con sponsorship de Kaggle y Le Wagon.
          </p>
        </div>
      </Section>
    </motion.main>
  )
}
