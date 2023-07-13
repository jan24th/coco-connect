import { getPost } from '../../../../utils/getPost.server'

export default async function Post({ slug, locale }: { slug: string; locale: string }) {
  const data = await getPost(slug, locale)
  return <div>{data.attributes.title}</div>
}
