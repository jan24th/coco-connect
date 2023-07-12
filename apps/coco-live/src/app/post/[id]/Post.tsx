import { getPost } from '../../../utils/getPost.server'

export default async function Post({ id }: { id: string }) {
  const data = await getPost(id)
  return <div>{data.attributes.title}</div>
}
