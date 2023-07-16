import type { Metadata } from 'next'
import React from 'react'
import { Page } from '@/components/atom/Layout'
import { ServerLink } from '@/components/atom/ServerLink'
import type { LocaleParamsProps } from '@/i18n/i18n-config'
import { initLocale, t } from '@/app/locale.server'

export const metadata: Metadata = {
  title: 'COCO LIVE',
}
export const revalidate = 60
export default async function Index({ params: { locale } }: LocaleParamsProps) {
  await initLocale(locale)
  return (
    <Page >
      <div className="flex flex-col items-center justify-center py-2">
        <div className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
          <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
            {t('Hello COCO LIVE!')}
            <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
              {t('work in progress')}
            </span>
          </h1>
          <ul className="mt-4 flex items-center justify-center">
            <li>
              <ServerLink href='/post' >{t('Blog')}</ServerLink>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
