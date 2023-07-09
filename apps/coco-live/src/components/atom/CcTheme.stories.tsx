import type { Meta, StoryObj } from '@storybook/react'

import { CcTheme, CcThemeProviders } from './CcTheme'

const meta: Meta<typeof CcTheme> = {
  title: 'atom/CcTheme',
  component: () => (
    <CcThemeProviders>
      <CcTheme />
      <div>
        <span>Hello </span>
        <span className="text-green-500 dark:text-red-500">world</span>
      </div>
    </CcThemeProviders>
  ),
}

export default meta

type Story = StoryObj<typeof CcTheme>

export const Example: Story = {}
