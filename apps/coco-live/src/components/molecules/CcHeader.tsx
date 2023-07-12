import Link from 'next/link'
import { getTranslator } from 'next-intl/server'
import React, { Suspense } from 'react'
import { CcCoconut } from '../icons/CcCoconut'
import { CcTheme } from '../atom/CcTheme.client'
import { CcTranslateClient } from '../atom/CcTranslate.client'

export async function CcHeader({ locale }: { locale: string }) {
  const t = await getTranslator(locale)
  return (
    <div className="border-b border-gray-400">
      <div className="h-15 container flex items-center justify-between px-10">
        <div className="flex items-center space-x-2">
          <CcCoconut height={46} width={46} />
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text text-2xl font-black text-transparent">
            {t('COCO LIVE')}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Link className="font-semibold" href={'/'}>
            { t('Bolg')}
          </Link>
          <Link className="font-semibold" href={'/'}>
            {t('Timeline')}
          </Link>
          {/* todo : loading style */}
          <Suspense fallback={<>loading</>}>
            <CcTranslateClient locale={locale} messages={{ Chinese: t('Chinese'), English: t('English') }}/>
          </Suspense>

          <div className="!ml-10">{t('translate')}</div>
          <CcTheme />
        </div>
      </div>
    </div>
  )
}
