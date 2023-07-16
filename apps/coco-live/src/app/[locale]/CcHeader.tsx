import { getLocale } from './context'
import { CcCoconut } from '@/components/icons/CcCoconut'
import { CcTranslateClient } from '@/components/atom/CcTranslate.client'
import { CcTheme } from '@/components/atom/CcTheme.client'
import { t } from '@/app/locale.server'
import { Link } from '@/components/atom/Link.client'

export async function CcHeader() {
  const locale = getLocale()
  return (
    <div className="border-b border-gray-400">
      <div className="container flex h-15 items-center justify-between">
        <div className="flex items-center space-x-2">
          <CcCoconut height={46} width={46} />
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-2xl font-black text-transparent">
            {t('COCO LIVE')}
          </span>
          <Link className="font-semibold" href={'/post'}>
            {t('Blog')}
          </Link>
          <Link className="font-semibold" href={'/'}>
            {t('Timeline')}
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <CcTranslateClient locale={locale} messages={{ cn: t('Chinese'), en: t('English') }}/>
          <CcTheme />
        </div>
      </div>
    </div>
  )
}
