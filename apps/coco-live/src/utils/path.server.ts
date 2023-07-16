import 'server-only'
import { headers } from 'next/headers'
import { typedBoolean } from 'helper'
import { getLocales } from '@/app/context'
import type { Locale } from '@/i18n/i18n-config'

export function getPathName() {
  const headersList = headers()
  const locales = getLocales()
  const pathname = headersList.get('x-invoke-path') || ''
  const paths = pathname.split('/').filter(typedBoolean)
  if (locales.includes(paths.at(0) as Locale))
    return `/${paths.slice(1).join('/')}`
  return pathname
}
