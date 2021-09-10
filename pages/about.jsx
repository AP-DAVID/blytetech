
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';

export default function about() {
    const containerVariants ={
        hidden :{
            x : '-100vw',
        },
    
        visible : {
            x : 0,
            transition : {duration : 1.5, delay : 0.2, type : "spring", stiffness : 120}
        },
        exit : {
            x : '-100vw',
            transition : {ease : 'easeInOut'}
        }
    }
  return (
    
	<div className="bg-black h-screen text-white py-20 overflow-hidden overflow-y-scroll">
		<div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-12 md:my-24">
			<motion.div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8"
                variants = {containerVariants}
                initial = "hidden"
                animate="visible"
                exit="exit"
            >
				<h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">Help</h1>
				<h2 className="text-3xl md:text-5xl leading-relaxed text-gray-50 md:leading-snug mb-2">The Musco Team
				</h2>
				<p className="text-2x1 md:text-base text-gray-50 mb-4">The Exher help form will be available soon, stay tuned ;)</p>

				   <Link href="/" 
                    >
                        <span  
                            className="bg-yellow-300 transition cursor-pointer
                            duration-200 transform ease-in hover:scale-105 hover:animate-pulse
                             hover:bg-yellow-300 text-black-300 hover:text-red
                             rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                        
                        
                        >
                            Home
                        </span>
					</Link>


			</motion.div>
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					
						<div>
							<img className="inline-flex p-8 md:p-0"  src="https://www.svgrepo.com/show/115909/sound.svg"/>
                        </div>
							
								
							</div>
						</div>
					</div>
                </div>
           
        
        

   
    
    
  
  )
}
