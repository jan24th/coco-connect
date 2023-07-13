'use client'
import React, { useMemo } from 'react'
import { usePathname } from 'next-intl/client'
import { useRouter, useSearchParams } from 'next/navigation'

// When the user is on `/en`, this will be `/`
// todo: style stotybook
// todo: useLocale useTranslation
// todo: cms labels
export function CcTranslateClient({ locale, messages }: { messages: Record<string, string>;locale: string }) {
  const options = [
    { value: '/cn', label: messages.Chinese },
    { value: '/en', label: messages.English },
  ]

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const defaultValue = useMemo(() => options?.find(opt => opt.value === `/${locale}`)?.value || options[0].value, [locale, options])

  return (<select
    defaultValue={defaultValue}
    onChange={(v) => {
      const qs = searchParams.toString()
      const url = `${v.target.value}${pathname}${qs ? `?${qs}` : ''}`
      router.push(url)
    }}
  >
    {options.map(({ value, label }) => {
      return <option value={value} key={value}>{label}</option>
    })}
  </select>)
}
