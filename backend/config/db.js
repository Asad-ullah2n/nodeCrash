import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOSE_URI);
    console.log(`connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);

    process.exit(1);
  }
};
