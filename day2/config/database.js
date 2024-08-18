const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db is connected "))
    .catch((err) => {
      console.log(err, " not db  connected");
      process.exit(1);
    });
};

module.exports = dbConnect;
