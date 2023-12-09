import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const UserSchema = new mongoose.Schema({
    id: Number,
    username: String,
  password:  String,
  normalPassword: String,
  role: Number,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
