import { screen } from '@testing-library/react'
import { renderTheme } from 'src/utils/renderTheme'
import { NavLogo } from '.'

describe('<NavLogo />', () => {
  it('should render correctly', () => {
    renderTheme(<NavLogo href="/">Example</NavLogo>)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent(/Example/i)
  })

  it('should have the "href" attribute with the assigned value', () => {
    renderTheme(<NavLogo href="/">Example</NavLogo>)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })

  it('should to match snapshot', () => {
    renderTheme(<NavLogo href="/">Example</NavLogo>)

    const link = screen.getByRole('link')

    expect(link).toMatchInlineSnapshot(`
      .emotion-0 {
        color: hsl(207, 4%, 16%);
        font-family: fontFamily;
        font-weight: 500;
      }

      <a
        class="emotion-0 emotion-1"
        href="/"
      >
        Example
      </a>
    `)
  })
})
