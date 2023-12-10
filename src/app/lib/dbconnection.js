import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.mongoURL, {
      dbName: "jhudo_db",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
