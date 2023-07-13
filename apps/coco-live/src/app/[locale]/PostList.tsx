import Link from 'next-intl/link'
import { getPosts } from '../../utils/getPosts.server'

export default async function PostList({ locale }: { locale: string }) {
  const posts = await getPosts(locale)
  if (!posts.length)
    return <div>Empty posts</div>
  return <ul>
    {posts.map(i =>
      <li key={i.id}>
        <Link href={`/post/${i.attributes.slug}`}>{i.attributes.title}</Link>
      </li>)}
  </ul>
}
