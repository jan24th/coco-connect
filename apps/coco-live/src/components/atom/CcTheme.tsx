'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'
import { ThemeSwitch } from 'ui'

const DEFAULT_THEME = 'dark'
export function CcThemeProviders({ children }: PropsWithChildren) {
  return <ThemeProvider defaultTheme={DEFAULT_THEME} attribute="class">
    {children}
  </ThemeProvider>
}
function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export function CcTheme() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  return <ThemeSwitch theme={theme} setTheme={setTheme} enabled={mounted} />
}
