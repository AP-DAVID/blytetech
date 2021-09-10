import ConnectToDatabase from "../../../backend/server"
import Source from "../../../models/Sourceuser";
import nextConnect from "next-connect"
import nodemailer from 'nodemailer'


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
    const {email, phoneNumber, section, country, region} = req.body


    // const transporter = nodemailer.createTransport({
    //     host : 'smtp-relay.sendinblue.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: "blytetech@gmail.com",
    //         pass: `${process.env.PASS}`,
    //     }
    // });
    

    try {
        const emailFind = await Source.findOne({email : email});

        if(emailFind){
            res.status(400).json("Email already exist");
        }



        if(!emailFind){

            //    const emaill = await transporter.sendMail({
            //        from: email,
            //        to: "blytetech@gmail.com",
            //        subject: `Contact form submission for source user nigga ${email}`,
            //        html: `<p>Yo lawrence a new contact form submission</p><br>
            //        <p><strong>Email: </strong> ${email}</p><br>
            //        <p><strong>Phone: </strong> ${phoneNumber}</p><br>
            //        <p><strong>Message: </strong> source user nigga</p><br>
            //        `

            //    })

            //    console.log(`Message sent: ${emaill.messageId}`);

                const newSubscriber = await Source.create(
                    { 
                        email : email,
                        country: country,
                        section: "Source User",
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
