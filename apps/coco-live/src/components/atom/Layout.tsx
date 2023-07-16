import type { PropsWithChildren } from 'react'
import Bread from './Bread'

export function Layout({ children, layout = false }: PropsWithChildren<{ layout?: boolean }>) {
  if (!layout)
    return children
  return <div className="p-4">
    <div className="py-1">
      Layout:
    </div>
    <div className="border border-dashed">
      {children}
    </div>
  </div>
}

export function Page({ children, layout = false }: PropsWithChildren<{ layout?: boolean }>) {
  const content = <><Bread />{children}</>
  if (!layout)
    return content
  return <div className="p-4">
    <div className="py-1">
      Page:
    </div>
    <div className="border border-dashed">
      {content}
    </div>
  </div>
}
