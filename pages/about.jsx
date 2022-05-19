import Head from 'next/head'
import { Footer } from 'components/organisms/Footer'
import Headline from 'components/organisms/Headline'
import Links from 'components/organisms/Links'
import styles from 'styles/Home.module.css'
import { proxy, useSnapshot } from "valtio"

export const pageNameState = proxy({pageName: "About"})

export default function Home() {
  const page = useSnapshot(pageNameState)

  return (
    <div>

      <Head>
        <title>大市商店：会社情報</title>
        <meta name="description" content="大市商店の会社情報のページです。" />
      </Head>

      <main>
        <Headline />
      </main>

      <Footer/>
    </div>
  )
}
