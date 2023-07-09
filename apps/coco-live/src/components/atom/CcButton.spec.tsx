import { render, screen } from '@testing-library/react'
import { CcButton } from './CcButton'

describe('CcButton', () => {
  it('has a button', () => {
    render(<CcButton label="button" />)
    expect(screen.getByRole('button').textContent).toBe('button')
  })
  describe('theme prop', () => {
    it('theme prop default primary', () => {
      render(<CcButton label="button" />)
      expect(screen.getByRole('button')).toHaveClass('bg-yellow-400')
    })
    it('theme prop can be secondary', () => {
      render(<CcButton label="button" theme="secondary" />)
      expect(screen.getByRole('button')).toHaveClass('bg-red-500')
    })
  })
})
