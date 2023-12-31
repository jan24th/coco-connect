import type { Metadata } from 'next'
import * as React from 'react'

function Card({
  title,
  cta,
  href,
}: {
  title: string
  cta: string
  href: string
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group mt-4 overflow-hidden rounded-lg border border-transparent bg-gradient-to-r from-brandred to-brandblue bg-origin-border text-[#6b7280]"
    >
      <div className="h-full bg-zinc-900 p-4">
        <p className="inline-block text-xl text-white">{title}</p>
        <div className="mt-4 text-xs group-hover:underline">{cta} →</div>
      </div>
    </a>
  )
}
const CARD_CONTENT = [
  {
    title: 'Caching Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/caching',
    cta: 'Read More',
  },
  {
    title: 'Running Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks',
    cta: 'Read More',
  },
  {
    title: 'Configuration Options',
    href: 'https://turbo.build/repo/docs/reference/configuration',
    cta: 'Read More',
  },
]

export const metadata: Metadata = {
  title: 'Web - Turborepo Example',
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
          {CARD_CONTENT.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  )
}
