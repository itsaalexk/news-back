import mongoose from "mongoose";
import { DATABASE_URL } from "./variables.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error conectando a MongoDB:", error);
    process.exit(1);
  }
};
