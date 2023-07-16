import 'server-only'
import { replaceWithObj } from 'shared'
import type { Locale } from '@/i18n/i18n-config'
import { initLabels } from '@/i18n/i18n.server'
import { getLabels, setLabels, setLocale } from '@/app/context'

export async function initLocale(locale: Locale) {
  setLocale(locale)
  return setLabels(await initLabels(locale))
}
export function t(key: keyof Messages, replace: Record<string, string> = {}) {
  const labels = getLabels()
  return replaceWithObj(labels[key], replace)
}
