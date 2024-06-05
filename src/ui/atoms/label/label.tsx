import * as React from 'react'

import * as Styled from './label.styled'
import type { Props } from './label.types'

export const Label: React.FC<Props> = ({ label, ...props }: Props) => {
  return <Styled.Label {...props}>{label}</Styled.Label>
}
