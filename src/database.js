import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("DataBase se conectó correctamente a ", db.connection.name);
} catch (error) {
  console.error(error.message);
}
