import { useHeaderMenu } from './'
import { act, renderHook } from '@testing-library/react'

describe('headerMenu store', () => {
  it('should start with isOpen equal to false', () => {
    const { result } = renderHook(() => useHeaderMenu())

    expect(result.current.isOpen).toBe(false)
  })

  it('should change state when calling handleToggleMenu function', () => {
    const { result } = renderHook(() => useHeaderMenu())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.handleToggleMenu()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.handleToggleMenu()
    })

    expect(result.current.isOpen).toBe(false)
  })
})
