import { Lora, Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const light = {
  font: {
    sizes: {
      biggest: 'var(--biggest-font-size)',
      h1: 'var(--h1-font-size)',
      h2: 'var(--h2-font-size)',
      h3: 'var(--h3-font-size)',
      normal: 'var(--normal-font-size)',
      small: 'var(--small-font-size)',
      smaller: 'var(--smaller-font-size)',
      tiny: 'var(--tiny-font-size)',
    },
    family: {
      roboto: roboto.style.fontFamily,
      lora: lora.style.fontFamily,
    },
  },
  colors: {
    first: 'hsl(207, 65%, 65%)',
    title: 'hsl(207, 4%, 16%)',
    text: 'hsl(207, 4%, 28%)',
    textLight: 'hsl(207, 4%, 56%)',
    body: 'hsl(207, 4%, 99%)',
    container: 'hsl(207, 4%, 95%)',
  },
  zIndex: {
    normal: 1,
    tooltip: 10,
    fixed: 100,
  },
  height: {
    header: '5.6rem',
  },
  medias: {
    mc: '(max-width:340px)',
    sm: '(min-width:576px)',
    md: '(min-width:767px)',
    lg: '(min-width:1023px)',
    xl: '(min-width:1200px)',
  },
} as const
