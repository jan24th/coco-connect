import type { Metadata } from 'next'
import React from 'react'
import { preloadPosts } from '../utils/getPosts.server'
import PostList from './PostList'

export const metadata: Metadata = {
  title: 'COCO LIVE',
}
export const revalidate = 60
export default async function Home() {
  preloadPosts()
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
          COCO LIVE
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
            work in progress
          </span>
          <PostList />
        </h1>
      </main>
    </div>
  )
}
