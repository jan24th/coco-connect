import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { replaceWithObj } from 'helper'

export interface LocaleLabels {
  [key: string]: string
}
interface LocaleState {
  labels: LocaleLabels
}

const context = createContext<LocaleState>({ labels: {} })
export function LocaleProvider({ labels, children }: PropsWithChildren<LocaleState>) {
  return <context.Provider value={{ labels }}>{children}</context.Provider>
}
export function useLabel<K extends keyof LocaleLabels>() {
  const { labels } = useContext(context)
  return (key: K, params: Record<string, string | number> = {}) => replaceWithObj(labels[key], params)
}
