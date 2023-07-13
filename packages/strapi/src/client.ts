import { GraphQLClient } from 'graphql-request'
import { type Sdk, getSdk } from './generated'

const env = process.env

export function createClientBase(
  clientUrl: string,
  getHeaders?: () => Record<string, string>,
): Sdk {
  const headers = getHeaders?.() || {}
  Object.assign(headers, { 'Content-Type': 'application/json' })
  return getSdk(
    new GraphQLClient(clientUrl, { headers, method: 'POST', fetch }),
  )
}
const localeMap: Record<string, string> = {
  en: 'en',
  cn: 'zh-CN',
  default: 'zh-CN',
}
function getLocale<T extends Record<string, any>>(locale: string, obj: T) {
  return { locale: localeMap[locale] || localeMap.default, ...obj }
}
function requestHeaders(headers: Record<string, string> = {}) {
  Object.assign(headers, { Authorization: `Bearer ${env.GRAPHQL_TOKEN}` })
  return headers
}
export const getStrapiPosts = (locale: string) => createClientBase(env.END_POINT, requestHeaders).getPosts(getLocale(locale, {})).then(res => res.content.data)
export const getStrapiPost = (slug: string, locale: string) => createClientBase(env.END_POINT, requestHeaders).getPost(getLocale(locale, { slug })).then(res => res.content.data.at(0))
