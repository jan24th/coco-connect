import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { replaceWithObj } from 'helper'

export interface LocaleLabels {
  [key: string]: string
}
interface LocaleState {
  locale: string
  labels: LocaleLabels
}

const context = createContext<LocaleState>({ locale: 'en', labels: {} })
export function LocaleProvider({ locale, labels, children }: PropsWithChildren<LocaleState>) {
  return <context.Provider value={{ locale, labels }}>{children}</context.Provider>
}

export function useLocale<K extends keyof LocaleLabels>() {
  const { labels } = useContext(context)
  return (key: K, params: Record<string, string | number> = {}) => replaceWithObj(labels[key], params)
}
