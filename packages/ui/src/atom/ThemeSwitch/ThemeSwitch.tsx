import { Switch } from '@headlessui/react'
import type { SVGProps } from 'react'
import clsx from 'clsx'
import { useLabel } from '../Locale/Locale'

const positionClass = 'absolute inset-0 flex justify-center items-center duration-500 transition-all ease-toggle'
const active = 'translate-x-0 translate-y-0 scale-100 opacity-100'
const hideSun = 'translate-x-0 -translate-y-4 scale-100 opacity-0'
const hideMoon = 'translate-x-0 translate-y-4 scale-100 opacity-0'
const unableSun = 'translate-x-1 -translate-y-1 scale-50 opacity-100'
const unableMoon = '-translate-x-1 translate-y-1 scale-50 opacity-100'

export function ThemeSwitch({
  theme,
  setTheme,
  enabled = true,
}: {
  theme: string
  setTheme: (v: string) => void
  enabled?: boolean
}) {
  const isLight = theme === 'light'
  const status = enabled ? theme : 'unable'
  const $t = useLabel()
  return (
    <Switch
      checked={enabled ? isLight : false}
      onChange={() => {
        if (enabled)
          setTheme(isLight ? 'dark' : 'light')
      }}
      className="relative h-4 w-4"
    >
      <span
        className={clsx(positionClass, { [active]: status === 'light', [hideSun]: status === 'dark', [unableSun]: status === 'unable' })}
      >
        <IcOutlineLightMode className="fill-current" />
      </span>
      <span
        className={clsx(positionClass, { [hideMoon]: status === 'light', [active]: status === 'dark', [unableMoon]: status === 'unable' })}
      >
        <IcOutlineModeNight className="fill-current" />
      </span>

      <span className="sr-only">
        {enabled ? $t('Toggle theme to', { mode: (isLight ? $t('Dark mode') : $t('Light mode')).toLowerCase() }) : $t('Toggle theme')}
      </span>
    </Switch>
  )
}

export function IcOutlineLightMode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>
  )
}

export function IcOutlineModeNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07c1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path></svg>
  )
}
