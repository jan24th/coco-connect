import 'server-only'
import { cache } from 'react'

export function serverContext<T>(defaultValue: T): [() => T, (v: T) => T] {
  const getRef = cache(() => ({ current: defaultValue }))

  const getValue = (): T => getRef().current

  const setValue = (value: T): T => {
    getRef().current = value
    return value
  }

  return [getValue, setValue]
}
