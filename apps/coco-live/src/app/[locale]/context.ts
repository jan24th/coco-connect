import 'server-only'
import type { Locale } from '@/i18n/i18n-config'
import { i18n } from '@/i18n/i18n-config'
import { serverContext } from '@/utils-server'

export const [getLocale, setLocale] = serverContext<Locale>(i18n.defaultLocale)
export const [getLabels, setLabels] = serverContext<Partial<Record<keyof Messages, string>>>({})
export const [getLocales] = serverContext(i18n.locales)
