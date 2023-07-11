import type { Metadata } from 'next'
import { api } from 'strapi/src/client'

export const metadata: Metadata = {
  title: 'COCO LIVE',
}

export default async function Home() {
  const posts = await api()
    .getPosts()

  // console.log(xxx)
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
          COCO LIVE
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
            work in progress
          </span>
          {posts.length
            ? <ul>
              {posts.map(i => <li key={i.id}>{i.attributes.title}</li>)}
            </ul>
            : <div>Empty posts</div>}
        </h1>
      </main>
    </div>
  )
}
