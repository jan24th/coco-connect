import '../../tailwind-input/globals.css'
import 'ui/styles.css'
import clsx from 'clsx'
import { Roboto } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import React from 'react'

import { headers } from 'next/headers'
import { CcHeader } from './CcHeader'
import { CcThemeProviders } from '@/components/atom/CcTheme.client'
import type { LocaleParamsProps } from '@/i18n/i18n-config'
import { Layout } from '@/components/atom/Layout'
import { initLocale } from '@/app/locale.server'
import { CcLocaleProvider } from '@/app/locale.client'

const robot = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const revalidate = 60
export default async function LocaleLayout({ children, params: { locale } }: PropsWithChildren<LocaleParamsProps>) {
  const labels = await initLocale(locale)
  const headersList = headers()
  const object = Object.fromEntries(headersList.entries())
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(robot.variable, 'font-sans', 'min-h-screen text-zinc-800  dark:text-zinc-100')}>
        <main>
          <Layout>
            <CcLocaleProvider locale={locale} labels={labels}>
              <CcThemeProviders>
                <CcHeader />
                {Object.entries(object).map(([key, value]) => {
                  return <div key={key}>{`${key} : ${value}`}</div>
                })}
                <div className="container pt-4">{children}</div>
              </CcThemeProviders>
            </CcLocaleProvider>
          </Layout>
        </main>
      </body>
    </html>
  )
}
