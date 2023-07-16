import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import type { HeadingComponent } from 'react-markdown/lib/ast-to-react'
import { createElement } from 'react'

import { getPost } from './getPost.server'
import { getSlug } from './context'
import { getLocale } from '@/app/context'
import { Time } from '@/components/atom/Time'
import { t } from '@/app/locale.server'

export const Heading: HeadingComponent = ({ children, level, ...props }) => {
  const id = children?.at(0)?.toString()?.toLowerCase()?.replace(/\s/g, '-')
  const className = 'group !my-8 border-b border-zinc-300/50 pb-3 dark:border-zinc-100/20'
  return createElement(`h${level}`, {
    ...props,
    className,
    id,
    children: <a className="no-underline" href={`#${id}`} >
      {children}
      <span className='ml-2 hidden opacity-50 group-hover:inline-block'>#</span>
    </a>,
  })
}
export function RenderContent({ content }: { content: string }) {
  return <ReactMarkdown children={content}
    components={{ h1: Heading, h2: Heading }}
    className="prose prose-zinc mx-auto max-w-3xl px-6 dark:prose-invert lg:px-8"
  />
}
export default async function Post() {
  const slug = getSlug()
  const locale = getLocale()
  const data = await getPost(slug, locale)
  const author = data.attributes.author.data.attributes
  const avatar = author.avatar.data.attributes
  const cover = data.attributes.cover?.data?.attributes
  return <div className="pb-32 pt-4 ">

    {
      cover
        && <div >
          <Image
            width={cover.width}
            height={cover.height}
            src={cover.url}
            alt={data.attributes.title}
            className="mb-10 aspect-[25/9] h-full w-full bg-zinc-50 object-cover"
          />
        </div>
    }
    <div className='mx-auto mb-10 max-w-3xl px-6 lg:px-8'>
      <div className="mt-6 border-b border-zinc-900/5 pt-6 dark:border-zinc-100/5">
        <h1 className="text-3xl font-bold tracking-tight">{data.attributes.title}</h1>
        <p className="my-1 text-sm">
          <Time locale={locale} time={data.attributes.publishedAt} />
        </p>
      </div>
    </div>
    <div className='mx-auto mb-10 max-w-3xl px-6 lg:px-8'>
      <div className="relative flex items-center gap-x-4">
        <Image
          src={avatar.url}
          height={avatar.height}
          width={avatar.width}
          alt={data.attributes.title}
          className="h-20 w-20 rounded-full bg-zinc-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold  text-zinc-900 dark:text-zinc-400">
            {t('Name', { first: author.firstname, last: author.lastname })}
          </p>
          <p className="text-zinc-600">{author.title}</p>
        </div>
      </div>
    </div>

    <div>
      {data.attributes.sections.map((i, index) => {
        if (i.__typename === 'ComponentSectionRichtext')
          return <RenderContent content={i.content} key={index}/>
        else return <div key={index}></div>
      })}
    </div>
  </div>
}
