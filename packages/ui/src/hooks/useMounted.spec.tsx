import { renderHook } from '@testing-library/react'
import { expect } from 'vitest'
import { useMounted } from './useMounted'

describe('useMounted', () => {
  it('return true', () => {
    const { result } = renderHook(() => useMounted())
    expect(result.current).toBe(true)
  })
})
