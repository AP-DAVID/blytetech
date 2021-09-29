import ConnectToDatabase from "../../../backend/server"
import Blogs from "../../../models/Blogpost";
import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


handler.get(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const blog = await Blogs.findById(id);
        !blog && res.status(404).json("blog doesn't exist");
        
        res.status(200).json(blog)
        console.log("Blog exist")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})


handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const blog = await Blogs.findByIdAndDelete(id);
        !blog && res.status(404).json("blog doesn't exist");
        
        res.status(200).json("blog deleted")
        console.log("Blog deleted")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})



handler.put(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    

    try{
        const blog = await Blogs.findByIdAndUpdate(req.query.id,{
            $set : req.body,
        });
        res.status(200).json("Blog updated and shii")
    }catch(err){
        return res.status(500).json(err)
    }

    

});



  
export default handler;