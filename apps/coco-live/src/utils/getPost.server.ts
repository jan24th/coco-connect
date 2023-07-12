import { cache } from 'react'
import 'server-only'
import { api } from 'strapi'

export const getPost = cache((id: string) => api().getPost(id))

export function prePost(id: string) {
  void getPost(id)
}
