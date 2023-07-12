import type { PropsWithChildren } from 'react'
import Link from 'next/link'
import { getPost } from '../../../utils/getPost.server'

export const revalidate = 60

export default async function Layout({ params: { id }, children }: PropsWithChildren<{
  params: { id: string }
}>) {
  await getPost(id)
  return <div>
    <div>
      <Link href='/' >Home</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}
