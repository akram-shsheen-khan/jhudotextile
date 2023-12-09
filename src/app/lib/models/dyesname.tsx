import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const DyesNameSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  dyesname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.DyesName ||
  mongoose.model("DyesName", DyesNameSchema);
