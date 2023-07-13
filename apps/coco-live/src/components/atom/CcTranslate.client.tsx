'use client'
import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'

// todo: style stotybook
// todo: useLocale useTranslation
// todo: cms labels
export function CcTranslateClient({ locale, messages }: { messages: Record<string, string>;locale: string }) {
  const options = [
    { value: '/cn', label: messages.Chinese },
    { value: '/en', label: messages.English },
  ]
  const router = useRouter()
  const defaultValue = useMemo(() => {
    return options?.find(opt => opt.value === `/${locale}`)?.value || options[0].value
  }, [locale, options])

  return <select defaultValue={defaultValue} onChange={(v) => {
    router.push(v.target.value)
  }}
  >
    {options.map(({ value, label }) => {
      return <option value={value} key={value}>{label}</option>
    })}
  </select>
}
