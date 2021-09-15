import Router from 'next/router'


function Projects() {
    return (
        <div className="mt-10 mb-10 relative group cursor-pointer transition duration-200 rounded-xl 
            ease-in transform sm:hover:scale-105 hover:z-50 bg-cover bg-no-repeat
            border-2 rounded-t-lg h-96 sm:h-60 w-full flex flex-col justify-between justify-self-center"
            style={{backgroundImage:`url("/exher.png")`}}
            onClick={() => Router.push("/subscribe")}

        >
           
               
              
           

                
            

           
            
            
        </div>
    )
}

export default Projects
