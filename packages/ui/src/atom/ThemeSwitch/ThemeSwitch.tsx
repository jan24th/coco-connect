import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'react-feather'

const positionClass = 'absolute inset-0 flex justify-center items-center'
const active = { opacity: 1, x: 0, y: 0, scale: 1 }
const hideSun = { opacity: 0, x: 0, y: -16, scale: 1 }
const hideMoon = { opacity: 0, x: 0, y: 16, scale: 1 }
const unableSun = { scale: 0.5, opacity: 1, y: -4, x: 4 }
const unableMoon = { scale: 0.5, opacity: 1, y: 4, x: -4 }
const transition = {
  duration: 0.5,
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

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

  return (
    <Switch
      checked={enabled ? isLight : false}
      onChange={() => enabled && setTheme(isLight ? 'dark' : 'light')}
      className="relative h-4 w-4"
    >
      <motion.span animate={enabled ? theme : 'unable'}>
        <motion.span
          className={positionClass}
          initial={unableSun}
          variants={{
            unable: unableSun,
            dark: hideSun,
            light: active,
          }}
          transition={transition}
        >
          <Sun className="stroke-current" size={16} strokeWidth="2" />
        </motion.span>
        <motion.span
          className={positionClass}
          initial={unableMoon}
          variants={{
            unable: unableMoon,
            dark: active,
            light: hideMoon,
          }}
          transition={transition}
        >
          <Moon className="stroke-current" size={16} strokeWidth="2" />
        </motion.span>
      </motion.span>

      <span className="sr-only">
        {enabled
          ? `toggle theme to ${isLight ? 'dark' : 'light'}`
          : 'toggle theme is not enabled'}
      </span>
    </Switch>
  )
}
