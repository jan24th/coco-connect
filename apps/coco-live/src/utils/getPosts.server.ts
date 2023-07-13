import { cache } from 'react'
import 'server-only'
import { getStrapiPosts } from 'strapi'

export const getPosts = cache((locale: string) => getStrapiPosts(locale))

export function preloadPosts(locale: string) {
  void getPosts(locale)
}
