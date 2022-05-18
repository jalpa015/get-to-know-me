import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from 'next-themes'
import ThemeSwitch from '../components/ThemeSwitch'
import Experience from '../components/Experience';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation/>
      {/* <ThemeSwitch />  */}
      <Component {...pageProps} />
      {/* <Experience /> */}
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
