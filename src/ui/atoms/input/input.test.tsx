import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Input } from './input.styled'
import type { Props } from './input.types'

describe('input', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'place holder'
    }
  })

  it('Should placeholder', () => {
    render(<Input {...defaultProps} />)
    const btn = screen.getByRole('textbox', { name: 'place holder' }) // name !== name input
    expect(btn).toBeDefined()
  })
})
