import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Note from '../components/Note'
import {motion} from 'framer-motion'


export default function Home() {

  const Variants = {
    exit : {
      x : '-100vw',
      transition : {ease : 'easeInOut', duration : 1}
    }
  }


  const [loading, setLoading] = useState(false)
  return (
    <div style={{backgroundColor : "black"}} className="flex flex-col overflow-y-scroll justify-between h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
 

    
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <motion.div
      variants = {Variants}
      exit="exit"
    >
       
       <Header />
    </motion.div>

    <motion.div
      variants = {Variants}
      exit="exit"
    >

       <Note loading={loading} text1="student" text="Exam coming up Wait, No access to questions for revisions? 
                    Don't worry, simply join our community for free and get
                   the opportunity to access questions for your coming exam
                   and that other skillset you're interested in."
       />
      
      </motion.div>     

    
    </div>
  )
}
