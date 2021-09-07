import {
    AcademicCapIcon,
   
} from "@heroicons/react/outline"

function Header() {
    return (
        <div className="my-5">
          <div className="flex mt-5 px-3 group">
                <AcademicCapIcon className="h-8 mb-1 group-hover:animate-bounce" />
                <h1 className="text-3xl font-bold">Exher</h1>

                <button className="bg-white hover:bg-green-700 mx-5 text-black font-bold py-2 px-4 rounded">
                    Subscribe
                </button>
          </div>
        </div>
    )
}

export default Header
