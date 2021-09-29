
import Editor from "../../components/Editor"
import { useState, useEffect, useRef } from 'react'
import BlogNavbar from "../../components/BlogNavbar";
import axios from 'axios';
import dynamic from "next/dynamic";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });

  const buttonList = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });

let CustomEditor;
if (typeof window !== "undefined") {
  CustomEditor = dynamic(() => import('../../components/constant'));
}



function Blogpost() {

    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [message, setMessage] = useState("");
    const [form, setForm] = useState(
        {
        title: '', 
        desc: '',
        body: '',
        references: ''
      }
    )

    useEffect(() => {
        setEditorLoaded(true);
      }, []);



    const handleSubmit= async() =>{
       if(data == "" || form.title == "" || form.desc == ""){
           setMessage("Content empty man")
       
       }else {

            await setForm(form.body = data)

            const config = {
                headers: {
                    "Accept" : "application/json",
                    'Content-type' : "application/json"
                }
            }


            try{
                const response = await axios.post('/api/blog', JSON.stringify(form) , config)
                
                console.log(response)
        
            }catch(error){
                console.log(error)
            }



       }

    }

    const handleChange =(e) => {

        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const editor = useRef();

    
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };


   
  
  

    return (
        <div className="bg-gray-400">
            <BlogNavbar />
            <div className="py-12 text-black bg-gray-400">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex flex-col mt-14 bg-white border-b border-gray-200">

                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-4 text-center font-normal text-red-400">{message}</h1>
                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                    <input 
                                        value={form.title || ''}
                                        name= 'title'
                                        onChange={handleChange} 
                                        type="text" className="border-2 text-black border-gray-300 p-2 w-full" name="title" id="title" required />
                                </div>

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Description <span className="text-red-500">*</span></label><br />
                                   
                                    <textarea
                                        cols="30"
                                        rows="5"
                                        value={form.desc || ''}
                                        name= 'desc'
                                        onChange={handleChange} 
                                        type="text" className="border-2 text-black border-gray-300 p-2 w-full"  id="desc" required />
                                </div>

                               

                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                    {/* <textarea id="editor" className="border-2 border-gray-500">
                                        
                                    </textarea> */}

                                {/* <Editor
                                        value={form.body || ''}

                                        name= "body"

                                        onChange={(data) => {
                                            setData(data)
                                          }}
                                        className="text-black"
                                        editorLoaded={editorLoaded}
                                />

                                {CustomEditor && <CustomEditor />} */}

                                <SunEditor 
                                    value={form.body || ''}
                                    name = "body"
                                    width="100%"
                                    setDefaultStyle="font-family: arial; font-size: 20px;"
                                    setAllPlugins={true} 
                                    onChange={(content) => {
                                        setData(content)
                                      }}
                                    setOptions={{
                                        height: 200,
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize', 'formatBlock'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor', 'textStyle'],
                                            ['removeFormat'],
                                            '/', // Line break
                                            ['outdent', 'indent'],
                                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                                            ['table', 'link', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                                            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                                            ['fullScreen', 'showBlocks', 'codeView'],
                                            ['preview', 'print'],
                                            ['save', 'template']
                                        ]
                                    }}
                                    getSunEditorInstance={getSunEditorInstance}

                                
                                />

                                
                               

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">References</label><br />
                                    <input          
                                        value={form.references || ''}
                                        name= 'references'
                                        onChange={handleChange}  type="text" className="border-2 text-black border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)"/>
                                </div>



                                    


                                </div>

                                <div className="flex p-1">
                                    
                                    <button  type="button" onClick={handleSubmit} className="rounded-xl hover:animate-pulse p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    </div>

    {/* <script src="./node_modules/ckeditor4/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'editor' );
    </script> */}


        </div>
    )
}

export default Blogpost
