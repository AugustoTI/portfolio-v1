import { css, Theme } from '@emotion/react'

export const globalStyles = ({ colors, medias, font }: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --biggest-font-size: 2.4rem;
    --h1-font-size: 2.4rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.6rem;
    --normal-font-size: 1.5rem;
    --small-font-size: 1.3rem;
    --smaller-font-size: 1.2rem;
    --tiny-font-size: 1rem;

    /* Responsive typography */
    @media screen and (min-width: 1024px) {
      :root {
        --biggest-font-size: 4.8rem;
        --h1-font-size: 3.6rem;
        --h2-font-size: 2.4rem;
        --h3-font-size: 2rem;
        --normal-font-size: 1.6rem;
        --small-font-size: 1.4rem;
        --smaller-font-size: 1.3rem;
        --tiny-font-size: 1.1rem;
      }
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${font.family.roboto};
    font-size: var(--normal-font-size);
    background: ${colors.body};
    color: ${colors.text};
    transition: background 0.4s; /* for dark mode animation */
  }

  h1,
  h2,
  h3 {
    font-family: ${font.family.lora};
    color: ${colors.title};
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  /*=============== REUSABLE CSS CLASSES ===============*/
  .container {
    max-width: 1024px;
    margin-inline: 2.4rem;

    @media screen and (${medias.mc}) {
      margin-inline: 1.6rem;
    }

    @media screen and (min-width: 1048px) {
      margin-inline: auto;
    }
  }

  .grid {
    display: grid;
    gap: 2.4rem;
  }

  .section {
    padding-block: 4rem;
  }

  .section-border {
    border-bottom: 1px solid ${colors.title};
    padding-bottom: 5.6rem;
  }

  .section-title {
    font-size: var(--h1-font-size);
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  .section-subtitle {
    display: block;
    font-size: var(--small-font-size);
    color: ${colors.textLight};
    margin-bottom: 4.8rem;
  }

  .main {
    overflow: hidden; /* For animation */
  }
`
