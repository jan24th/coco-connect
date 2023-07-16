import type { PostFragment } from 'strapi'
import Image from 'next/image'
import { getLocale, t } from '../context'
import { getPosts } from './getPosts.server'
import { ServerLink } from '@/components/atom/ServerLink'
import { Time } from '@/components/atom/Time'

export function PostListSkeletons() {
  return <ul>
    {Array.from({ length: 5 }).map((_, i) => <li key={i}>
      <div >
        <span className="inline-block h-4 w-full max-w-[480px] animate-pulse rounded-md bg-zinc-500 dark:bg-zinc-700"></span>
      </div>
    </li>)}
  </ul>
}
export function PostItem({ post }: { post: PostFragment }) {
  const locale = getLocale()
  const href = `/post/${post.slug}`
  return <article className="relative isolate flex flex-col gap-8 lg:flex-row">
    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      <Image
        height={post.cover.data.attributes.height}
        width={post.cover.data.attributes.width}
        src={post.cover.data.attributes.url}
        alt={post.title}
        className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-50 object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
    </div>
    <div>
      <div className="flex items-center gap-x-4 text-xs">
        <Time locale={locale} time={post.publishedAt} />
        {
          post.post_tags.data.map(i =>
            <ServerLink
              href={href}
              key={i.id}
              className="relative z-10 rounded bg-zinc-200 px-3 py-1 font-medium text-zinc-500 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {i.attributes.name}
            </ServerLink>)
        }

      </div>
      <div className="group relative max-w-xl">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200 ">
          <ServerLink href={href}>
            <span className="absolute inset-0" />
            {post.title}
          </ServerLink>
        </h3>
        <p className="mt-5 text-sm leading-6 text-zinc-600">{post.description}</p>
      </div>
      <div className="mt-6 flex border-t border-zinc-900/5 pt-6 dark:border-zinc-100/5">
        <div className="relative flex items-center gap-x-4">
          <Image
            src={post.author.data.attributes.avatar.data.attributes.url}
            height={post.author.data.attributes.avatar.data.attributes.height}
            width={post.author.data.attributes.avatar.data.attributes.width}
            alt={post.title}
            className="h-10 w-10 rounded-full bg-zinc-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold  text-zinc-900 dark:text-zinc-400">
              {t('Name', { first: post.author.data.attributes.firstname, last: post.author.data.attributes.lastname })}
            </p>
            <p className="text-zinc-600">{post.author.data.attributes.title}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
}
export default async function PostList() {
  const locale = getLocale()
  const posts = await getPosts(locale)
  if (!posts.length)
    return <div>Empty posts</div>
  return <ul className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
    {posts.map(i =>
      <li key={i.id}>
        <PostItem post={i.attributes} />
      </li>)}
  </ul>
}
