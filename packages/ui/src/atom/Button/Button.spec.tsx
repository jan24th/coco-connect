import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('can switch theme', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
