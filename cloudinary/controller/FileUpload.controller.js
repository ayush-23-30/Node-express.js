import { File } from "../model/File.model.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const imageUploadController = async(req, res) =>{
  try {
    
  } catch (error) {
    
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