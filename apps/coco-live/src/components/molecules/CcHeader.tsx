import Link from 'next/link'
import { CcCoconut } from '../icons/CcCoconut'
import { CcTheme } from '../atom/CcTheme'

export function CcHeader() {
  return (
    <div className="border-b border-gray-400">
      <div className="container flex h-15 items-center justify-between px-10">
        <div className="flex items-center space-x-2">
          <CcCoconut height={46} width={46} />
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-2xl font-black text-transparent">
            COCO LIVE
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Link className="font-semibold" href={'/'}>
            Bolg
          </Link>
          <Link className="font-semibold" href={'/'}>
            Timeline
          </Link>
          <div className="!ml-10">translate</div>
          <CcTheme />
        </div>
      </div>
    </div>
  )
}
