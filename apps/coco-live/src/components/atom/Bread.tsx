import { typedBoolean } from 'shared'
import { ServerLink } from './ServerLink'
import { getPathName } from '@/utils-server'

export default async function Bread() {
  const pathname = getPathName()
  const arr = pathname.split('/').filter(typedBoolean)
  if (arr.length === 0)
    return null
  const bread = arr.reduce<{ name: string; path: string }[]>((pre, cur) =>
    [...pre, { name: cur, path: `${pre.at(-1)?.path || ''}/${cur}` }], [{ name: 'Home', path: '/' }])
  return <div
    className="space-x-1 uppercase"
  >{bread.map((item, index) =>
    index === bread.length - 1
      ? <span className="opacity-50" key={item.path}>{item.name}</span>
      : <>
        <ServerLink href={item.path} key={item.path}>{item.name}</ServerLink>
        <span >/</span>
      </>)}
  </div>
}
