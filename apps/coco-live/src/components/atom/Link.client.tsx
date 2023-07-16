'use client'
import type { ComponentProps } from 'react'
import * as NextLink from 'next/link'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { localePathname } from '@/utils'

export function Link({ href, className, ...props }: ComponentProps<typeof NextLink.default>) {
  const params = useParams()
  return <NextLink.default className={clsx(className)} href={localePathname(href.toString(), params.locale)} {...props} />
}
