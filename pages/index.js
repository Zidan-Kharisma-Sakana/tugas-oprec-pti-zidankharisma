import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {App} from '../components/App'
import {NavBar} from "../components/NavBar"
import {Footer} from "../components/Footer"

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    />
      </Head>
      <NavBar/>
      <main style={{backgroundColor:"rgb(220,220,220"}}>
       <App/>
      </main>
      <Footer/>


    </div>
  )
}
