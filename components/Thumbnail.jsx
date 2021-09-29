import { LightBulbIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ source, title, body}) => {
    return (
    <div className="sm:p-2 pr-6 group cursor-pointer transition duration-200 rounded-xl ease-in transform sm:hover:scale-105 hover:z-50">
            <img
               src={source}
            //    layout='responsive'
            //    height={1080}
            //    width={1920}
               style={{height : "250px", width:"720px"}}
               className="rounded-lg "
            />

            <div className='sm:p-2'>
                <p className="truncate max-w-md">{title}</p>

                <h2 className="mt-1 text-md font-light text-black transition-all 
                duration-100 ease-in-out  group-hover:font-bold">
                    {body}
                </h2>


                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    Akintola
                   
                    < LightBulbIcon className="h-5 mx-2" />
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
