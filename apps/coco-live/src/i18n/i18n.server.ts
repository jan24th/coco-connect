import { getStrapiLabels } from 'strapi'
import { LRUCache } from 'lru-cache'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: async () => {
    const localMessages = await import('./messages/en.json').then(module => module.default)
    const strapiMessages = await getStrapiLabels('en')
    return Object.assign(localMessages, strapiMessages)
  },
  cn: async () => {
    const localMessages = await import('./messages/cn.json').then(module => module.default)
    const strapiMessages = await getStrapiLabels('cn')
    return Object.assign(localMessages, strapiMessages)
  },
}
const cache = new LRUCache<Locale, Messages>({
  max: 500,
  maxSize: 5000,
  sizeCalculation: () => 1,
  ttl: 1000 * 60 * 5,
  allowStale: false,
  updateAgeOnGet: false,
  updateAgeOnHas: false,
  fetchMethod: async key => await dictionaries[key](),
})

export async function initLabels(locale: Locale) {
  return cache.fetch(locale)
}
