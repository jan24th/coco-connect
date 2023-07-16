import { cache } from 'react'
import 'server-only'
import { getStrapiPost } from 'strapi'

export const getPost = cache((slug: string, locale: string) => getStrapiPost(slug, locale))

export function preloadPost(slug: string, locale: string) {
  void getPost(slug, locale)
}
