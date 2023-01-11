import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.a`
  ${({ theme: { font, colors, medias } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.4rem;
    font-size: ${font.sizes.smaller};
    color: ${colors.textLight};
    transition: color 0.3s;

    &:hover {
      color: ${colors.title};
    }

    svg {
      font-size: 2rem;
    }

    @media screen and ${medias.lg} {
      font-size: ${font.sizes.normal};

      svg {
        display: none;
      }
    }
  `}
`
