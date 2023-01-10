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
import { NavLogo } from './NavLogo'

export const Header = () => {
  const isOpen = useHeaderMenu(store => store.isOpen)
  const handleToggleMenu = useHeaderMenu(store => store.handleToggleMenu)

  return (
    <S.Container>
      <S.NavBar className="container" aria-label="Principal">
        <NavLogo href={'/'}>Augusto</NavLogo>

        <S.NavMenu isOpen={isOpen}>
          <S.NavList className="grid">
            <li>
              <S.NavLink href="#home" onClick={() => handleToggleMenu()}>
                <RiHome5Line /> Home
              </S.NavLink>
            </li>

            <li>
              <S.NavLink href="#habilidades" onClick={() => handleToggleMenu()}>
                <RiTrophyLine /> Habilidades
              </S.NavLink>
            </li>

            <li>
              <S.NavLink href="#qualificacoes" onClick={() => handleToggleMenu()}>
                <RiBookOpenLine /> Qualificações
              </S.NavLink>
            </li>

            <li>
              <S.NavLink href="#serviços" onClick={() => handleToggleMenu()}>
                <RiBriefcaseLine /> Serviços
              </S.NavLink>
            </li>

            <li>
              <S.NavLink href="#projetos" onClick={() => handleToggleMenu()}>
                <RiImageLine /> Projetos
              </S.NavLink>
            </li>

            <li>
              <S.NavLink href="#contato" onClick={() => handleToggleMenu()}>
                <RiChat3Line /> Contato
              </S.NavLink>
            </li>
          </S.NavList>

          <S.NavMenuCloseBtn
            onClick={() => handleToggleMenu()}
            title="Fechar menu"
            aria-label="Fechar menu"
          >
            <RiCloseLine />
          </S.NavMenuCloseBtn>
        </S.NavMenu>

        <div>
          <S.NavOpenMenuBtn
            onClick={() => handleToggleMenu()}
            title="Abrir menu"
            aria-label="Abrir menu"
          >
            <RiMenu4Line />
          </S.NavOpenMenuBtn>
        </div>
      </S.NavBar>
    </S.Container>
  )
}
