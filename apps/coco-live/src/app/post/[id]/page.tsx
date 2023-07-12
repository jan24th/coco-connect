import { prePost } from '../../../utils/getPost.server'
import Post from './Post'

export default async function Page({ params: { id } }: {
  params: { id: string }
}) {
  prePost(id)
  return <Post id={id} />
}
