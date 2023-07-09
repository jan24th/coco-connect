import '../tailwind-input/globals.css'
import 'ui/styles.css'
import { Roboto } from 'next/font/google'
import clsx from 'clsx'
import { CcHeader } from '../components/molecules/CcHeader'
import { CcThemeProviders } from '../components/atom/CcTheme.client'

const robot = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* todo:locale=>fonts chinese */}
      <body
        className={clsx(robot.variable, 'min-h-screen font-sans text-zinc-800  dark:text-zinc-100')}
      >
        <CcThemeProviders>
          <CcHeader />
          <div className="container">{children}</div>
        </CcThemeProviders>
      </body>
    </html>
  )
}
