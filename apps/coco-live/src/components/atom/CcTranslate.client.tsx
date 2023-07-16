'use client'
import React, { Fragment } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { typedBoolean } from 'shared'
import clsx from 'clsx'
import type { Locale } from '@/i18n/i18n-config'

// When the user is on `/en`, this will be `/`
// todo: style storybook
// todo: useLocale useTranslation
// todo: cms labels
export function CcTranslateClient({ locale, messages }: { messages: Record<Locale, string>; locale: Locale }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  return <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold ">
      {messages[locale]}
    </Popover.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded-xl bg-zinc-50 p-2 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-100/5">
        {Object.entries(messages).map(([value, label]) => {
          const paths = pathname.split('/').filter(typedBoolean)
          if (Object.keys(messages).includes(paths[0]))
            paths.shift()
          const qs = searchParams.toString()
          const url = `/${value}/${paths.join('/')}${qs ? `?${qs}` : ''}`
          return (
            <Link
              key={value}
              href={url}
              className={clsx('block rounded-lg px-3 py-2 text-sm font-semibold leading-6 hover:bg-zinc-700/5 dark:hover:bg-zinc-200/5')}
            >
              {label}
            </Link>
          )
        })}
      </Popover.Panel>
    </Transition>
  </Popover>
}
