'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { ThemeSwitch, useMounted } from 'ui'

const DEFAULT_THEME = 'dark'
export function CcThemeProviders({ children }: PropsWithChildren) {
  return <ThemeProvider defaultTheme={DEFAULT_THEME} attribute="class">
    {children}
  </ThemeProvider>
}

export function CcTheme() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  return <ThemeSwitch theme={theme} setTheme={setTheme} enabled={mounted} />
}
