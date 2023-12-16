
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Footer from './../components/bbc/Footer';
import Headers from '../components/bbc/Header';

function MyApp({ Component,  
  pageProps: { session, ...pageProps } }) {
  return (
    <div>
    
       <SessionProvider session={session}>
      <Headers/> 
  
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </div>
  )
}

export default MyApp
