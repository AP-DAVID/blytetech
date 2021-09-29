import Image from 'next/image'
import BlogCard from '../../components/BlogCard'
import BlogNavbar from '../../components/BlogNavbar'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { Markup } from 'interweave';
import Footer from '../../components/Footer'


function Blog() {  

    const [data, setData] = useState([])
    const [body, setBody] = useState("")

  

    useEffect(async () => {

        try{
            const response = await axios.get('/api/blog')
            
          
            await setData(response.data)
            console.log(data)

    
        }catch(error){
            console.log(error)
        }

    
    
    }, []);



    return (

        <div className="h-screen w-full bg-gray-100">

        <BlogNavbar />

                    <div>
                           <h1 className="text-2xl font-black text-gray-900 pb-2 mt-3 px-6 md:px-12">
                                Blogs
                            </h1>
                    </div>

        <div className="mt-7 sm:mt-2 flex justify-center w-full justify-items-center group">

           <div className="">        
                    

               <div className="sm:px-7 ml-4 sm:ml-1 mr-4 sm:mr-0 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">

                        


                  {
            
                    data?.map((content) => 
                        (
                         
                                
                              
                                <BlogCard key={content._id} id={content._id} title={content.title}  body={content.desc} date={content.date} />
                             
                    


                               

                           
                        )
                    )
                }

                    
               </div>



                
                

           </div>

            
            
        </div>

            <Footer />
        </div>
        
    )
}

export default Blog
