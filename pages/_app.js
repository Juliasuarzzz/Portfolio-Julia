import '../styles/globals.less'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Poppins } from 'next/font/google'
import Script from 'next/script' // 👈 Importa Script

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <main className={poppins.className}>
      {/* Aquí cargas el kit de Font Awesome */}
      <Script
        src="https://kit.fontawesome.com/0b0bc56781.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
