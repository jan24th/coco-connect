import type { Metadata } from 'next'
import { api } from 'strapi/src/client'

export const metadata: Metadata = {
  title: 'COCO LIVE',
}

export default async function Home() {
  const xxx = await api()
    .getPosts()
    .then((res) => {
      return res
    })

  // console.log(xxx)
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
          COCO LIVE
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
            work in progress
          </span>
        </h1>
      </main>
    </div>
  )
}
