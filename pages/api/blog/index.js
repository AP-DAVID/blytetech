import ConnectToDatabase from "../../../backend/server"
import Blogs from "../../../models/Blogpost";
import nextConnect from "next-connect"



ConnectToDatabase();
const handler = nextConnect();


handler.get(async(req, res)=>{
    try {
      const blogs  = await Blogs.find({})
      res.status(200).json(blogs)
    } catch (error) {
      res.status(400).json({success: false, error: error})
    }
  })





handler.post(async(req, res) =>{
    const {title, body, desc, references, date} = req.body


    

    try {
        const titleFind = await Blogs.findOne({title : title});

        if(titleFind){
            res.status(400).json("title already exist");
        }



        if(!titleFind){

        

                const newBlog = await Blogs.create(
                    { 
                        title : title,
                        desc : desc,
                        body: body,
                        references: references,
                        date : date
                        
                    }
                    
                );
                newBlog.save()
                res.status(201).json(newBlog) 

        }


        
    } catch (error) {
        console.error(error)
    }
})


export default handler
