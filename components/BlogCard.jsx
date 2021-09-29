import { useRouter } from 'next/router'

function BlogCard({title, id, body, date}) {
    const router = useRouter()

    
    return (
        <div onClick={() => router.push(`/Blog/${id}`)}>
                <section className="py-2 sm:py-2 text-black">
                    <div >
                        
                        <div className=" flex justify-center">
                            <div className="w-full lg:w-2/3   py-5">
                                <div className="bg-white hover:shadow-xl rounded-xl rounded-t-xl w-full">
                                    <div className="">
                                        <img src="https://media.istockphoto.com/photos/professional-blogger-working-on-his-new-post-for-social-media-at-home-picture-id1252684502?b=1&k=20&m=1252684502&s=170667a&w=0&h=3kK22loPkc8S4_iJdVZ4_IpoOeIKI5zVe4LbqzhD9bM=" alt=""
                                            className="h-36 w-full rounded-xl hover:opacity-25" />
                                    </div>
                                    <div className="px-2 py-2">
                                        <h1 className="font-bold text-lg">
                                            {title}
                                        </h1>
                                        <p className="py-2 break-words">
                                            {body}
                                        </p>
                                        <div className="flex flex-wrap pt-2">
                                            <div className="w-full md:w-1/3 break-words text-sm font-medium">
                                                {date}
                                            </div>
                                            <div className="">
                                                <div className="text-sm font-medium">
                                                    SHARE:
                                                    <a href="" className="text-blue-700 px-1 ">
                                                        Twitter
                                                    </a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
            </section>
        </div>
    )
}

export default BlogCard
