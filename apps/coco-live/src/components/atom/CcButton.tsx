import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface CcButtonProps {
  theme?: 'primary' | 'secondary'
  label: string
  onClick?: () => void
}

export function CcButton({
  theme = 'primary',
  label,
  ...props
}: PropsWithChildren<CcButtonProps>) {
  return (
    <button
      type="button"
      className={clsx(theme === 'primary' ? 'bg-yellow-400' : 'bg-red-500')}
      {...props}
    >
      {label}
    </button>
  )
}
