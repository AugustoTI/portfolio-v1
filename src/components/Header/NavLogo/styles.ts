import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled(Link)`
  ${({ theme: { colors, font } }) => css`
    color: ${colors.title};
    font-family: ${font.family.lora};
    font-weight: 500;
  `}
`
