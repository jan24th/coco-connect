import { cache } from 'react'
import 'server-only'
import { api } from 'strapi'

export const getPosts = cache(() => api().getPosts())

export function preloadPosts() {
  void getPosts()
}
