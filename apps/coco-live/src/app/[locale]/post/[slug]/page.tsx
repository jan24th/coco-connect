import { preloadPost } from '../../../../utils/getPost.server'
import Post from './Post'

export default async function Page({ params: { slug, locale } }: {
  params: { slug: string;locale: string }
}) {
  preloadPost(slug, locale)
  return <Post locale={locale} slug={slug} />
}
