import type { Metadata } from 'next'
import React from 'react'
import { preloadPosts } from './getPosts.server'
import PostList from './PostList'
import type { LocaleParamsProps } from '@/i18n/i18n-config'
import { Page } from '@/components/atom/Layout'
import { initLocale } from '@/app/locale.server'

export const metadata: Metadata = {
  title: 'COCO LIVE',
}
export const revalidate = 60
export default async function Index({ params: { locale } }: LocaleParamsProps) {
  await initLocale(locale)
  preloadPosts(locale)

  return (
    <Page >
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <PostList />
          </div>
        </div>
      </div>
    </Page>
  )
}
