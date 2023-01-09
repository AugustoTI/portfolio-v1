import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

export const Container = styled.header`
  ${({ theme: { zIndex } }) => css`
    width: 100%;
    position: fixed;
    bottom: 3.2rem;
    left: 0;
    z-index: ${zIndex.fixed};
  `}
`

export const NavBar = styled.nav`
  ${({ theme: { height, colors } }) => css`
    height: calc(${height.header} + 0.8rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.body};
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    padding-inline: 2.4rem;
    border-radius: 4.8rem;
  `}
`

export const NavLogo = styled(Link)`
  ${({ theme: { colors, font } }) => css`
    color: ${colors.title};
    font-family: ${font.family.lora};
    font-weight: 500;
  `}
`

export const NavMenu = styled.div<{ isOpen: boolean }>`
  ${({ theme: { colors }, isOpen }) => css`
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
  `}
`

export const NavList = styled.ul`
  ${() => css`
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    gap: 3.2rem 4.8rem;
  `}
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  ${({ theme: { font, colors } }) => css`
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
  `}
`

export const NavMenuCloseBtn = styled.button`
  ${({ theme: { colors } }) => css`
    color: ${colors.title};
    font-size: 2.4rem;
    background: transparent;
    position: absolute;
    right: 2.4rem;
    bottom: 1.1rem;
  `}
`

export const NavButtons = styled.div``

export const NavOpenMenuBtn = styled.button`
  ${({ theme: { colors } }) => css`
    color: ${colors.title};
    font-size: 2rem;
    background: transparent;
  `}
`
