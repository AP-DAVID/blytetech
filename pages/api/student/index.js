import ConnectToDatabase from "../../../backend/server"
import Student from "../../../models/Studentuser";
import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

// handler.get(async(req, res)=>{
//   try {
//     const candidates  =  await Election.find({})
//     res.status(200).json(candidates)
//   } catch (error) {
//     res.status(400).json({success: false, error: error})
//   }
// })


//api endpoint = http://localhost:3000/api/registerParty
/* 
 Json body = {
     "party" : "pdp",
     "candidateName" : "Ebele Johnathan"
 }

*/


handler.post(async(req, res) =>{
    const {email, phoneNumber,section,  country, region} = req.body
    

    try {
        const emailFind = await Student.findOne({email : email});

        if(emailFind){
            res.status(400).json("Email already exist");
        }



        if(!emailFind){

                const newSubscriber = await Student.create(
                    { 
                        email : email,
                        country: country,
                        section : "Student user",
                        phoneNumber: phoneNumber,
                        region: region 
                        
                    }
                    
                );
                newSubscriber.save()
                res.status(201).json(newSubscriber) 

        }


        
    } catch (error) {
        console.error(error)
    }
})


export default handler
