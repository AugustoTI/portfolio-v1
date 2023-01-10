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
import { useHeaderMenu } from '~/stores/headerMenu'

export const Header = () => {
  const isOpen = useHeaderMenu(store => store.isOpen)
  const handleToggleMenu = useHeaderMenu(store => store.handleToggleMenu)

  return (
    <S.Container>
      <S.NavBar className="container">
        <S.NavLogo href={'/'}>Augusto</S.NavLogo>

        <S.NavMenu isOpen={isOpen}>
          <S.NavList className="grid">
            <S.NavItem>
              <S.NavLink href="#home" onClick={() => handleToggleMenu()}>
                <RiHome5Line /> Home
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink href="#habilidades" onClick={() => handleToggleMenu()}>
                <RiTrophyLine /> Habilidades
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink href="#qualificacoes" onClick={() => handleToggleMenu()}>
                <RiBookOpenLine /> Qualificações
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink href="#serviços" onClick={() => handleToggleMenu()}>
                <RiBriefcaseLine /> Serviços
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink href="#projetos" onClick={() => handleToggleMenu()}>
                <RiImageLine /> Projetos
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink href="#contato" onClick={() => handleToggleMenu()}>
                <RiChat3Line /> Contato
              </S.NavLink>
            </S.NavItem>
          </S.NavList>

          <S.NavMenuCloseBtn onClick={() => handleToggleMenu()}>
            <RiCloseLine />
          </S.NavMenuCloseBtn>
        </S.NavMenu>

        <S.NavButtons>
          <S.NavOpenMenuBtn onClick={() => handleToggleMenu()}>
            <RiMenu4Line />
          </S.NavOpenMenuBtn>
        </S.NavButtons>
      </S.NavBar>
    </S.Container>
  )
}
