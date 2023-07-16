import { typedBoolean } from 'helper'
import type { Locale } from '@/i18n/i18n-config'
import { i18n } from '@/i18n/i18n-config'

export function localePathname(pathname: string, locale: string) {
  if (!locale)
    return '/'
  if (/^https?|\/\//.test(pathname))
    return pathname
  const paths = pathname.toString().split('/').filter(typedBoolean)
  const firstPart = paths.at(0)
  let _href: string
  if (i18n.locales.includes(paths.at(0) as Locale))
    _href = `${pathname}`
  else if (!firstPart)
    _href = `/${locale}`
  else
    _href = `/${locale}${pathname}`
  return _href
}
