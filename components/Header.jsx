import {
    AcademicCapIcon,
   
} from "@heroicons/react/outline"

import Router from 'next/router'

function Header() {

    


    return (
        <div className="sticky top-0 z-50 flex">
          <div className="flex mt-5 px-3 group">
                <AcademicCapIcon className="h-8 mb-1 group-hover:animate-bounce" />
                <h1 className="text-3xl font-bold">Exher</h1>

                <a href="/" className="bg-blue-400 hover:bg-green-700 mx-5 text-black font-bold py-2 px-4 rounded">
                    Home
                </a>
          </div>
        </div>
    )
}

export default Header
