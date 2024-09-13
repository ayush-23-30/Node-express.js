import express from "express";
import {
  LocalFileUploadController,
  videoUploadController,
  imageReducerUploadContoller,
  imageUploadController,
} from "../controller/FileUpload.controller.js"

const routeUploader = express.Router();

routeUploader.post("/CloudinaryImageUploader", imageUploadController);
routeUploader.post("/localfile",LocalFileUploadController);
routeUploader.post("/videoUpload", videoUploadController);
routeUploader.post("/imageReducer", imageReducerUploadContoller);

export default routeUploader;
 