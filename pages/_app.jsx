import Head from 'next/head'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="robots" content="noindex" />
      </Head>
      <Component className="font-light" {...pageProps} />
    </>
  )
}

export default MyApp
