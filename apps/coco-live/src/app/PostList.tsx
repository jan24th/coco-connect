import Link from 'next/link'
import { getPosts } from '../utils/getPosts.server'

export default async function PostList() {
  const posts = await getPosts()
  if (!posts.length)
    return <div>Empty posts</div>
  return <ul>
    {posts.map(i =>
      <li key={i.id}>
        <Link href={`/post/${i.id}`}>{i.attributes.title}</Link>
      </li>)}
  </ul>
}
