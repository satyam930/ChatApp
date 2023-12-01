const mongoose = require("mongoose");

const connectDb = async () => {
  const database = await mongoose.connect(
    "mongodb+srv://abc:123@cluster0.uvznamm.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`connected to database`);
};

module.exports = connectDb;
