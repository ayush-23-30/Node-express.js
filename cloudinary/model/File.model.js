import mongoose from "mongoose";

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

export const File = mongoose.model("File", fileUploadSchema);
