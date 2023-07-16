import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import { expect } from 'vitest'
import { waitFor } from '@testing-library/dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { LocaleProvider } from '../Locale/Locale'
import { ThemeSwitch } from './ThemeSwitch'

const mock = {
  'Dark mode': 'Dark mode',
  'Light mode': 'Light mode',
  'Toggle theme to': 'Toggle theme to {{mode}}',
  'Toggle theme': 'Toggle theme',
}
const Wrapper = ({ children }: PropsWithChildren) => <LocaleProvider locale='en' labels={mock}>{children}</LocaleProvider>
describe('ThemeSwitch', () => {
  it('can switch theme', () => {
    const Container = () => {
      const [theme, setTheme] = useState('dark')
      return <ThemeSwitch theme={theme} setTheme={setTheme} />
    }
    render(<Wrapper><Container /></ Wrapper >)
    const switchButton = screen.getByRole('switch')
    expect(screen.getByText('Toggle theme to light mode')).toBeInTheDocument()
    fireEvent.click(switchButton)
    expect(screen.getByText('Toggle theme to dark mode')).toBeInTheDocument()
  })
  describe('have enabled prop', () => {
    it('disable if enabled is false', () => {
      const Container = () => {
        const [theme, setTheme] = useState('dark')
        return <ThemeSwitch theme={theme} setTheme={setTheme} enabled={false} />
      }
      render(<Wrapper><Container /></ Wrapper >)
      expect(screen.getByText('Toggle theme')).toBeInTheDocument()
    })
    it('enabled if enabled turn on with dark mode', async () => {
      const Container = () => {
        const [theme, setTheme] = useState('dark')
        const [enabled, setEnabled] = useState(false)
        return (
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} enabled={enabled} />
            <button title="enable" onClick={() => setEnabled(true)}>
              enable
            </button>
          </>
        )
      }
      render(<Wrapper><Container /></ Wrapper >)
      const button = screen.getByText('enable')
      fireEvent.click(button)
      await waitFor(() => {
        expect(screen.getByText('Toggle theme to light mode')).toBeInTheDocument()
        const switchButton = screen.getByRole('switch')
        fireEvent.click(switchButton)
        expect(screen.getByText('Toggle theme to dark mode')).toBeInTheDocument()
      })
    })
    it('enabled if enabled turn on with light mode', async () => {
      const Container = () => {
        const [theme, setTheme] = useState('light')
        const [enabled, setEnabled] = useState(false)
        return (
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} enabled={enabled} />
            <button title="enable" onClick={() => setEnabled(true)}>
              enable
            </button>
          </>
        )
      }
      render(<Wrapper><Container /></ Wrapper >)
      const button = screen.getByText('enable')
      fireEvent.click(button)
      await waitFor(() => {
        expect(screen.getByText('Toggle theme to dark mode')).toBeInTheDocument()
        const switchButton = screen.getByRole('switch')
        fireEvent.click(switchButton)
        expect(screen.getByText('Toggle theme to light mode')).toBeInTheDocument()
      })
    })
  })
})
