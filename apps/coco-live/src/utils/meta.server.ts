import 'server-only'
import type { SeoFragment } from 'strapi'
import type { Metadata } from 'next'

export function getSEO(seo: SeoFragment, extra?: Metadata): Metadata {
  return {
    ...extra,
    title: seo.metaTitle || extra.title,
    description: seo.metaDescription || extra.description,
    keywords: seo.keywords || extra.keywords,
    robots: seo.metaRobots || extra.robots,
  }
}
