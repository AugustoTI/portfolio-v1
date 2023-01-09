import Head from 'next/head'
import { Header } from '~/components/Header'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Augusto César portfolio</title>
        <meta
          name="description"
          content="Um site portfolio construido pelo desenvolvedor front-end Augusto César "
        />
      </Head>
      <Header />
    </>
  )
}
