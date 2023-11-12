import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const ChemicalNameSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  chemicalname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.ChemicalName ||
  mongoose.model("ChemicalName", ChemicalNameSchema);
