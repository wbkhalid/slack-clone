import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  const conn = await mongoose.connect(ENV.MONGO_URI);

  console.log(`db connected by host: ${conn.connection.host}`);
};

export default connectDB;
