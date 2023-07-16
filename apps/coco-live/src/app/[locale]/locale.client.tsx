'use client'
import { LocaleProvider, useLabel as useLabelBase } from 'ui'
import type { ComponentProps } from 'react'

export function useLabel() {
  return useLabelBase<keyof Messages>()
}

export function CcLocaleProvider(props: ComponentProps<typeof LocaleProvider>) {
  return <LocaleProvider {...props} />
}
