import type { ComponentProps } from 'react'
import Link from 'next/link'
import { typedBoolean } from 'shared'
import clsx from 'clsx'
import { getLocale, getLocales } from '@/app/context'
import type { Locale } from '@/i18n/i18n-config'

export function ServerLink({ href, className, ...props }: ComponentProps<typeof Link>) {
  const locale = getLocale()
  const locales = getLocales()
  const paths = (href.toString()).split('/').filter(typedBoolean)
  const firstPart = paths.at(0)
  let _href: string

  if (locales.includes(paths.at(0) as Locale))
    _href = `${href}`
  else if (!firstPart)
    _href = `/${locale}`
  else
    _href = `/${locale}${href}`
  return <Link className={clsx(className)} href={_href} {...props} />
}
