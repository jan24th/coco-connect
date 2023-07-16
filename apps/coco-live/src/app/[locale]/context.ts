import 'server-only'
import { replaceWithObj } from 'shared'
import type { Locale } from '@/i18n/i18n-config'
import { i18n } from '@/i18n/i18n-config'
import { serverContext } from '@/utils-server'
import { initLabels } from '@/i18n/i18n.server'

export const [getLocale, setLocale] = serverContext<Locale>(i18n.defaultLocale)
export const [getLabels, setLabels] = serverContext<Partial<Record<keyof Messages, string>>>({})
export const [getLocales] = serverContext(i18n.locales)
export async function initLocale(locale: Locale) {
  setLocale(locale)
  setLabels(await initLabels(locale))
}
export function t(key: keyof Messages, replace: Record<string, string> = {}) {
  const labels = getLabels()
  return replaceWithObj(labels[key], replace)
}
