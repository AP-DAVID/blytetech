import { useState } from "react"
import Header from "../components/Header"
import Note from "../components/Note"
import {motion} from 'framer-motion'

function Source() {

    const [loading, setLoading] = useState(true);
    const Variants = {
        exit : {
          x : '-100vw',
          transition : {ease : 'easeInOut', duration : 1}
        }
      }

    return (
        <div className="flex flex-col overflow-y-scroll justify-between h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
      

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
        <Note loading={loading} text1="source_user" text="You're confident of your knowledge, and would want to make money
                        from it. Join our community, and upload questions for students or professionals to download...
                        did we mention you set the price for your questions?
            
        ."
        />
      </motion.div>
       

    
    </div>
    )
}

export default Source
