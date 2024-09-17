import mongoose from "mongoose";
import nodemailer from "nodemailer"

const fileUploadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
  },
  { timestamps: true}
);
// post middleware 
fileUploadSchema.post("save", async function (doc){
  try {
    // console.log("DOC" , doc);
    // transporter 
    let transporter = nodemailer.transporter({
      host : process.env.MAIL_HOST,
      auth : {
        user : process.env.MAIL_USER,
        pass : process.env.MAIL_PASS
      }
    })
    

    let info = await transporter.sendMail(
    {  from : `ayush kumar`,
      to : doc.email, 
      subject : "new file is uploaded on cloudinary", 
      html : `<h2> Hello joe </h2> <p> file uploaded  </p> `
    })
    
    
  } catch (error) {
    console.error(error);
    
  }
})



export const File = mongoose.model("File", fileUploadSchema);
