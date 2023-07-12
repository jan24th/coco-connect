import '../../tailwind-input/globals.css'
import 'ui/styles.css'
import clsx from 'clsx'
import { Roboto } from 'next/font/google'
import React from 'react'

// import { notFound } from 'next/navigation'
// import { useLocale } from 'next-intl'
import { CcThemeProviders } from '../../components/atom/CcTheme.client'
import { CcHeader } from '../../components/molecules/CcHeader'

const robot = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cn' }]
}

export default function LocaleLayout({ children, params: { locale } }: {
  children: React.ReactNode
  params: { locale: 'en' | 'cn' }
}) {
  // const _locale = useLocale()
  // // Show a 404 error if the user requests an unknown locale
  // if (locale !== _locale)
  //   notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(robot.variable, 'font-sans', 'min-h-screen text-zinc-800  dark:text-zinc-100')}>
        <CcThemeProviders>
          <CcHeader locale={locale} />
          <div className="container">{children}</div>
        </CcThemeProviders>
      </body>
    </html>
  )
}
