import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
</Head>
      <main>
        <Header title="Welcome!" />
        <p className="description">
          WELCOME TO... <code>MRS.BARTLETT'S GAMES!!</code>
        </p>
      </main>
<Footer />
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bartlett</title>
        <link rel="icon" href="https://ih1.redbubble.net/image.4569252647.6787/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
      </Head>
    
      <Footer />
    </div>
  )
}
