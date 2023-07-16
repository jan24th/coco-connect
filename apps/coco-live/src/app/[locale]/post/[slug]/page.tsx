import React from 'react'
import type { Metadata } from 'next'
import { getSEO } from '../../../../utils/meta.server'
import { getPost, preloadPost } from './getPost.server'
import Post from './Post'
import { setSlug } from './context'
import { initLocale, t } from '@/app/locale.server'
import { Page } from '@/components/atom/Layout'
import type { LocaleParamsProps } from '@/i18n/i18n-config'

export const revalidate = 60
export async function generateMetadata(
  { params: { slug, locale } }: LocaleParamsProps<{ slug: string }>,
): Promise<Metadata> {
  const data = await getPost(slug, locale)
  const author = data.attributes.author.data.attributes
  const languages = data.attributes.localizations.data
    .reduce<Record<string, string>>((pre, { attributes: { locale, slug } }) =>
      ({ ...pre, [locale]: `/${locale.toLowerCase().split('-').at(-1)}/post/${slug}` }), {})

  return getSEO(data.attributes.seo, {
    title: data.attributes.title,
    description: data.attributes.description,
    authors: {
      url: `/us/${author.slug}`,
      name: t('Name', { first: author.firstname, last: author.lastname }),
    },
    alternates: {
      languages,
    },
  })
}
export default async function SlugPage({ params: { slug, locale } }: LocaleParamsProps<{ slug: string }>) {
  await initLocale(locale)
  setSlug(slug)
  preloadPost(slug, locale)

  return (<Page>
    <div className="mt-4">
      <Post />
    </div>
  </Page>)
}
