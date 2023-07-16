import { GraphQLClient } from 'graphql-request'
import { type Sdk, getSdk } from './generated'

const env = process.env

export function createClientBase(
  fetchOption?: RequestInit,
): Sdk {
  const headers: RequestInit['headers'] = {}
  Object.assign(headers, { 'Content-Type': 'application/json' })
  Object.assign(headers, { Authorization: `Bearer ${env.GRAPHQL_TOKEN}` })
  return getSdk(
    new GraphQLClient(env.END_POINT, { headers, method: 'POST', fetch: (url: string, options: RequestInit) => fetch(url, { ...options, ...fetchOption }) }),
  )
}
export const localeMap: Record<string, string> = {
  en: 'en',
  cn: 'zh-CN',
  default: 'zh-CN',
}
function getLocale<T extends Record<string, any>>(locale: string, obj: T) {
  return { locale: localeMap[locale] || localeMap.default, ...obj }
}

export function getStrapiPosts(locale: string, fetchOption?: RequestInit) {
  return createClientBase(fetchOption).getPosts(getLocale(locale, {})).then(res => res.content.data)
}

export function getStrapiPost(slug: string, locale: string, fetchOption?: RequestInit) {
  return createClientBase(fetchOption).getPost(getLocale(locale, { slug })).then(res => res.content.data.at(0))
}

export async function getStrapiLabels(locale: string, page = 1, pageSize = 10, fetchOption?: RequestInit): Promise<Record<string, string>> {
  const { content: { data, meta: { pagination: { pageCount } } } } = await createClientBase(fetchOption).getLabels(getLocale(locale, {
    pagination: {
      page,
      pageSize,
    },
  }))
  const locales = data.reduce<Record<string, string>>((pre, cur) => Object.assign(pre, { [cur.attributes.key]: cur.attributes.value }), {})
  if (pageCount === page)
    return locales
  return Object.assign(locales, await getStrapiLabels(locale, page + 1, pageSize, fetchOption))
}
