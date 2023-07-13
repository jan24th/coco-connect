import type { PropsWithChildren } from 'react'
import Link from 'next-intl/link'

export const revalidate = 60

export default async function Layout({ children }: PropsWithChildren) {
  return <div>
    <div>
      <Link href='/' >Home</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}
