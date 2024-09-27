import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bartlett</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          WELCOME TO... <code>MRS.BARTLETT'S GAMES!!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
