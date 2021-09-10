import Forms from "./Forms"

function Note({text, loading, text1}) {
    return (
        <div className="-mt-6 md:w-3/5 p-2 flex flex-col justify-center items-center
            min-h-screen group" >


            <div className=" sm:ml-40  ">
                <h1 className="mx-6 mt-5 text-4xl font-extrabold">The Platform you need<br/> for Academic Excellence</h1>
                <h1 className="mx-6 md:w-6/12 break-words mt-5 text-sm">
                    {text}
                </h1>
                <Forms loading={loading} text={text1} />
            </div>
        </div>
    )
}

export default Note 



// width:200px;
// height:200px;
// position: fixed;
// background-color: #00FF00;
// top: 50%;
// left: 50%;
// margin-top: -100px;
// margin-left: -100px;