import Head from 'next/head'
import { Footer } from 'components/organisms/Footer'
import Headline from 'components/organisms/Headline'
import { Header } from 'components/organisms/Header'
import { MainVisual } from 'components/organisms/MainVisual'

export default function Home() {
  return (
    <div>
      <Head>
        <title>大市商店 | 浜問屋</title>
        <meta name="description" content="大市商店株式会社のオフィシャルサイト「大市商店ホームページ」です。" />
      </Head>

      <Header />
      <main>
        <MainVisual />
        <Headline />
        {/* 商品を配置 */}
        {/* Giftの付加価値キャッチコピー */}
        {/* お客様の声 */}
        {/* そそる記事 */}
        {/* ニュース */}
        {/* メールマガジンとかもありかも */}
      </main>

      <Footer />
    </div>
  )
}
