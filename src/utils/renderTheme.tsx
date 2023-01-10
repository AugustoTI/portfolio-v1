import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { light } from '~/styles/themes/light'

export const renderTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>)
}
