import Head from 'next/head'
import { useState } from 'react'
import Landing from '../components/Landing'



export default function Home() {

  

  const [loading, setLoading] = useState(false)
  return (
     <div>

      <Head>
          <title>Blyte tech</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />

     </div>
  )
}
