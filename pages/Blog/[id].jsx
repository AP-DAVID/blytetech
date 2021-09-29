import axios from 'axios'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Interweave from 'interweave';
import BlogNavbar from '../../components/BlogNavbar';
import Footer from '../../components/Footer';
import Thumbnail from '../../components/Thumbnail';


function blogs() {

    const router = useRouter()

    const [data, setData] = useState([])
    const [body, setBody] = useState("")
    const { id } = router.query

  

    useEffect(async () => {

        try{
            const response = await axios.get(`/api/blog/${id}`)
            
          
            await setData(response.data)
            console.log(data)

    
        }catch(error){
            console.log(error)
        }

    
    
    }, []);

    


    return (
        <div className="text-black h-full w-full">
            <BlogNavbar />
            {/* {
            
                data?.map((content) => 
                    (
                        <div key={content._id}>
                            <h1 >{content.title}</h1><br />

                           
                   


                             <Markup content={content.body} />

                        </div>
                    )
                )
            } */}



            <main className="mt-14 flex justify-center ml-12 mr-12 sm:px-32">
                 <div className=" flex justify-center w-full h-full">
                     <div className="break-all" style={{width : "720px"}}>
                         <Thumbnail title={data.title} body={data.desc} source="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                         
                         <div className="sm:ml-10 sm:mr-10 break-words">
                            <Interweave className="ml-3 mr-3 " tagName="div" content={data.body} />
                        </div>
                     </div>

                 </div>
            </main>

            <footer>
                <Footer />
            </footer>
            
            
        </div>
    )
}

export default blogs
