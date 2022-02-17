import Head from 'next/head'
import { Footer } from 'components/organisms/Footer'
import Headline from 'components/organisms/Headline'
import Links from 'components/organisms/Links'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>大市商店 | 浜問屋</title>
        <meta name="description" content="大市商店株式会社のオフィシャルサイト「大市商店ホームページ」です。" />
      </Head>

      <main>
        <Headline />
        <Links />
      </main>

      <Footer />
    </div>
  )
}
