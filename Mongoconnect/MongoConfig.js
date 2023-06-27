import mongoose from "mongoose";

export const MongoConfig = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/api`);
    conn && console.log("Mongo Connected");
  } catch (error) {
    console.log(error);
  }
};
