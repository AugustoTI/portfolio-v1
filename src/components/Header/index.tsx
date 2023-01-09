import * as S from './styles'
import {
  RiBookOpenLine,
  RiBriefcaseLine,
  RiChat3Line,
  RiCloseLine,
  RiHome5Line,
  RiImageLine,
  RiMenu4Line,
  RiTrophyLine,
} from 'react-icons/ri'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.NavBar className="container">
        <S.NavLogo href={'/'}>Augusto</S.NavLogo>

        <S.NavMenu isOpen={isOpen}>
          <S.NavList className="grid">
            <S.NavItem>
              <S.NavLink href="#home" onClick={() => setIsOpen(prevState => !prevState)}>
                <RiHome5Line /> Home
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                href="#habilidades"
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <RiTrophyLine /> Habilidades
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                href="#qualificacoes"
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <RiBookOpenLine /> Qualificações
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                href="#serviços"
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <RiBriefcaseLine /> Serviços
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                href="#projetos"
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <RiImageLine /> Projetos
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                href="#contato"
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <RiChat3Line /> Contato
              </S.NavLink>
            </S.NavItem>
          </S.NavList>

          <S.NavMenuCloseBtn onClick={() => setIsOpen(prevState => !prevState)}>
            <RiCloseLine />
          </S.NavMenuCloseBtn>
        </S.NavMenu>

        <S.NavButtons>
          <S.NavOpenMenuBtn onClick={() => setIsOpen(prevState => !prevState)}>
            <RiMenu4Line />
          </S.NavOpenMenuBtn>
        </S.NavButtons>
      </S.NavBar>
    </S.Container>
  )
}
