'use client'
import { typedBoolean } from 'helper'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Link } from '@/components/atom/Link.client'
import type { Locale } from '@/i18n/i18n-config'
import { i18n } from '@/i18n/i18n-config'

export default function Breadcrumb() {
  const pathname = usePathname()
  const arr = pathname.split('/').filter(typedBoolean)
  if (arr.length === 0)
    return null
  if (i18n.locales.includes(arr.at(0) as Locale))
    arr.shift()
  const bread = arr.reduce<{ name: string; path: string }[]>((pre, cur) => {
    return [...pre, { name: cur, path: `${pre.at(-1)?.path || ''}/${cur}` }]
  }, [{ name: 'Home', path: '' }])
  return <div
    className="space-x-1 uppercase"
  >{bread.map((item, index) =>
    index === bread.length - 1
      ? <span className="opacity-50" key={item.path}>{item.name}</span>
      : <Fragment key={item.path}>
        <Link href={item.path} >{item.name}</Link>
        <span >/</span>
      </Fragment>)}
  </div>
}
