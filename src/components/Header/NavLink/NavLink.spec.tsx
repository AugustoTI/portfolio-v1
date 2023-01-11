import { screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import userEvent from '@testing-library/user-event'
import { RiHome5Line } from 'react-icons/ri'
import { NavLink } from '.'
import { light } from '~/styles/themes/light'
import { renderTheme } from 'src/utils/renderTheme'

expect.extend(matchers)

describe('<NavLink />', () => {
  it('should render correctly', () => {
    renderTheme(<NavLink href="#">Example</NavLink>)

    const link = screen.getByRole('link', { name: /Example/i })

    expect(link).toBeInTheDocument()
  })

  it('should call the function on click', async () => {
    const mockFn = jest.fn()
    renderTheme(
      <NavLink href="#" onClick={mockFn}>
        Example
      </NavLink>,
    )

    const link = screen.getByRole('link', { name: /Example/i })

    await userEvent.click(link)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should change the color when hovering the mouse over it', () => {
    renderTheme(<NavLink href="#">Example</NavLink>)

    const link = screen.getByRole('link', { name: /Example/i })

    expect(link).toHaveStyleRule('color', light.colors.title, {
      target: ':hover',
    })
  })

  it('should change font size on larger screens', () => {
    renderTheme(<NavLink href="#">Example</NavLink>)

    const link = screen.getByRole('link', { name: /Example/i })

    expect(link).toHaveStyleRule('font-size', light.font.sizes.normal, {
      media: light.medias.lg,
    })
  })

  it('icon should disappear on larger screens', () => {
    renderTheme(
      <NavLink href="#">
        <RiHome5Line /> Example
      </NavLink>,
    )

    const link = screen.getByRole('link', { name: /Example/i })

    expect(link).toHaveStyleRule('font-size', '2rem', {
      target: 'svg',
    })

    expect(link).toHaveStyleRule('display', 'none', {
      media: light.medias.lg,
      target: 'svg',
    })
  })

  it('should to match snapshot', () => {
    const { container } = renderTheme(
      <NavLink href="#">
        <RiHome5Line /> Example
      </NavLink>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
