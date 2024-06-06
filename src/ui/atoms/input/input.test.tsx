import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Input } from './input.tsx'
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
    const input = screen.getByPlaceholderText('place holder')
    expect(input).toBeDefined()
  })
})
