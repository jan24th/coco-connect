'use client'
import { LocaleProvider, useLocale } from 'ui'
import type { ComponentProps } from 'react'

export function useLabel() {
  return useLocale<keyof Messages>()
}

export function CcLocaleProvider(props: ComponentProps<typeof LocaleProvider>) {
  return <LocaleProvider {...props} />
}
