import type { AnchorHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export const NavLink = ({ children, ...rest }: NavLinkProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
