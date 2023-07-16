import 'server-only'
import { cache } from 'react'

export function serverContext<T>(defaultValue: T): [() => T, (v: T) => void] {
  const getRef = cache(() => ({ current: defaultValue }))

  const getValue = (): T => getRef().current

  const setValue = (value: T) => {
    getRef().current = value
  }

  return [getValue, setValue]
}
