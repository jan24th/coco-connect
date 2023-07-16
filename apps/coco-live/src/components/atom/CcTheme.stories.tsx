import type { Meta, StoryObj } from '@storybook/react'

import labels from '../../i18n/messages/en.json'
import { CcTheme, CcThemeProviders } from './CcTheme.client'
import { CcLocaleProvider } from '@/app/locale.client'

const meta: Meta<typeof CcTheme> = {
  title: 'atom/CcTheme',
  component: () => (
    <CcLocaleProvider locale='en' labels={labels}>
      <CcThemeProviders>
        <CcTheme />
        <div>
          <span>Hello </span>
          <span className="text-green-500 dark:text-red-500">world</span>
        </div>
      </CcThemeProviders>
    </CcLocaleProvider>
  ),
}

export default meta

type Story = StoryObj<typeof CcTheme>

export const Example: Story = {}
