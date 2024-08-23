import mongoose from "mongoose";


const dbConnect = () => {
  mongoose
    .connect('mongodb://localhost:27017/backendDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db is connected "))
    .catch((err) => {
      console.log(err, " not db  connected");
      process.exit(1);
    });
};

export default dbConnect; 