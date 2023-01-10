import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.header`
  ${({ theme: { zIndex, medias, colors } }) => css`
    width: 100%;
    position: fixed;
    bottom: 3.2rem;
    left: 0;
    z-index: ${zIndex.fixed};

    @media screen and ${medias.lg} {
      top: 0;
      bottom: initial;
      background: ${colors.body};
      transition: 0.4s;
    }
  `}
`

export const NavBar = styled.nav`
  ${({ theme: { height, colors, medias } }) => css`
    height: calc(${height.header} + 0.8rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.body};
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    padding-inline: 2.4rem;
    border-radius: 4.8rem;

    @media screen and ${medias.sm} {
      width: 38rem;
      margin: 0 auto;
    }

    @media screen and ${medias.lg} {
      width: initial;
      height: calc(${height.header} + 2.4rem);
      box-shadow: none;
      border-radius: 0;
      column-gap: 4.8rem;
      margin-inline: 2.4rem;
      padding: 0;
    }

    @media screen and (min-width: 1048px) {
      margin-inline: auto;
    }
  `}
`

export const NavMenu = styled.div<{ isOpen: boolean }>`
  ${({ theme: { colors, medias }, isOpen }) => css`
    @media screen and (max-width: 1023px) {
      position: fixed;
      width: 88%;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: ${isOpen ? '3.2rem' : '-60%'};
      background: ${colors.body};
      box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
      padding: 3.2rem 2.4rem 8rem;
      border-radius: 3.2rem;
      transition: bottom 0.3s;
    }

    @media screen and ${medias.mc} {
      padding-bottom: 6.4rem;
    }

    @media screen and ${medias.sm} {
      width: 38rem;
    }

    @media screen and ${medias.lg} {
      width: initial;
      margin-left: auto;
      background-color: ${colors.body};
      transition: background 0.4s;
    }
  `}
`

export const NavList = styled.ul`
  ${({ theme: { medias } }) => css`
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    gap: 3.2rem 4.8rem;

    @media screen and ${medias.mc} {
      gap: 1.6rem 2rem;
    }

    @media screen and ${medias.lg} {
      display: flex;
      column-gap: 4.8rem;
    }
  `}
`

export const NavLink = styled.a`
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

export const NavMenuCloseBtn = styled.button`
  ${({ theme: { colors, medias } }) => css`
    color: ${colors.title};
    font-size: 2.4rem;
    background: transparent;
    position: absolute;
    right: 2.4rem;
    bottom: 1.1rem;

    @media screen and ${medias.lg} {
      display: none;
    }
  `}
`

export const NavOpenMenuBtn = styled.button`
  ${({ theme: { colors, medias } }) => css`
    color: ${colors.title};
    font-size: 2rem;
    background: transparent;

    @media screen and ${medias.lg} {
      display: none;
    }
  `}
`
