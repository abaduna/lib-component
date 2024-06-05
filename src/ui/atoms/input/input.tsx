import * as React from 'react'

import * as Styled from './input.styled'
import type { Props } from './input.types'

export const input: React.FC<Props> = ({ label, ...res }) => {
  return <Styled.Input placeholder={label} {...res} data-testid='input' />
}
