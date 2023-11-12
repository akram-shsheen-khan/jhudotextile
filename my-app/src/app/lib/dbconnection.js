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
    await mongoose.connect(
      "mongodb+srv://shaheenakram754:eGAj5iDkIl4yq8Gu@cluster0.sxpsplg.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "jhudo_db",
      }
    );
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
