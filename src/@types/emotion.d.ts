import '@emotion/react'
import { light } from '../styles/themes/light'

type MyTheme = typeof light

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MyTheme {}
}
