import { File } from "../model/File.model.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cloudinary from 'cloudinary'

// Define __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function isFileTypeSupported (type ,supportedTypes ){
return supportedTypes.includes(type);
}

async function uploadToCloudinary(file, folder) {
  const options = { folder };
  try {
      const result = await cloudinary.uploader.upload(file.tempFilePath, options);
      console.log('Upload successful:', result);
  } catch (error) {
      console.error('Error uploading file:', error);
  }
}


const imageUploadController = async(req, res) =>{
  try {
    // data fetch 
    const {name, imageUrl , email , tags} = req.body; 
    console.log(name , email , tags); 

    if (!req.files || !req.files.imageFile) {
      return res.status(400).json({
        message: "No file uploaded",
        success: false,
      });
    }

    const file = req.files.imageFile;
    // body k ander se files chliye jiska naam = imageFile hoga : yahi naam postman m use hoga upload karte huye ...
    // console.log(file);

    // manual Validations - 
    const supportedFileTypes =  ["jpg" , "jpeg", "webp" , "png"]; 

    // findtype of our know file 
    // first we select the file then split the file type == type . ke bad aata hai aur uska index first hota hai 

    const fileType = file.name.split(".")[1].toLowerCase(); 
    // console.log(fileType);
    

    // checking the file type is according to our file type 

    if(!isFileTypeSupported(fileType , supportedFileTypes)){
      return res.status(505).json({
        message : "give file type is not supported",
        success : false 
      })
    }

    // if we come here means that the file is supported here 

// --- upload to cloudinary 

const response = await uploadToCloudinary(file, "babbarBackend")
console.log(response);



// entry in DB

await File.create({
  name,
  tags,
  email,
  imageUrl
});

res.json({
  success: true,
  response, 
  message: "Image successfully uploaded",
});
 

  } catch (error) {
   return res.status(401).json({
    error : error.message, 
    message: "we are failed to upload the image to cloudinary ", 
    success : false
    })
  }
}

const videoUploadController = async (req,res)=>{
  try {
     
  } catch (error) {
    
  }
}

const imageReducerUploadContoller = async (req, res)=>{
  try {
    
  } catch (error) {
    
  }
}

// today is only do image save in your own server 
// it take path from client and Add to your server...

const LocalFileUploadController = async (req, res) => {
  try {
    const file = req.files.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const path = __dirname + "/files/" + Date.now() + "_" + file.name;

    file.mv(path, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "File upload failed",
          error: err.message,
        });
      }
      res.json({
        success: true,
        message: "Local file has been added",
        path: path,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {imageReducerUploadContoller , imageUploadController , LocalFileUploadController , videoUploadController}