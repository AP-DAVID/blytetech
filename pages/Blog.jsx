import Image from 'next/image'


function Blog() {
    return (
        <div className="mt-16 sm:mt-2 flex flex-col w-full justify-center items-center group">

           <div className="flex w-full justify-center">


               <div className="flex flex-col mt-20 space-y-5">

                   

                     <h1 className="text-center break-words text-black font-medium">Our blogs will be available soon, </h1>

                     <h1 className="text-center break-words mb-12 text-black font-medium">Play with our cute dog in the meantime :). </h1>

                     <Image src="/resultdog.svg" className="text-blue-400 hover:animate-bounce" height={500} width={550} 
                
                   />
               </div>

                

           </div>

            
            
        </div>
    )
}

export default Blog
