import Forms from "./Forms"

function Note({text, loading, text1}) {
    return (
        <div className="-mt-6 flex flex-col md:w-3/5">
            <div className=" sm:ml-40">
                <h1 className="mx-5 mt-5 sm:mx-0 text-4xl font-extrabold">The Platform you need<br/> for Academic Excellence</h1>
                <h1 className="mx-5 w-30 break-words mt-5 text-sm">
                    {text}
                </h1>
                <Forms loading={loading} text={text1} />
            </div>
        </div>
    )
}

export default Note
