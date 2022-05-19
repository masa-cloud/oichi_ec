import Head from 'next/head'
import Headline from 'components/organisms/Headline'
import { Footer } from 'components/organisms/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>大市商店：商品情報</title>
        <meta name="description" content="大市商店の商品情報のページです。" />
      </Head>

      <main className={styles.main}>
        <Headline />
      </main>

      <Footer />
    </div>
  )
}
