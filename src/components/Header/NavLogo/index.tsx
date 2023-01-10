import { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

interface NavLogoProps extends LinkProps {
  children: ReactNode
}

export const NavLogo = ({ children, ...rest }: NavLogoProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
