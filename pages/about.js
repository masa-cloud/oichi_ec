import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/organisms/Footer'
import Links from '../components/organisms/Links'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>大市商店：会社情報</title>
        <meta name="description" content="大市商店の会社情報のページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Links />
      </main>

      <Footer/>
    </div>
  )
}
