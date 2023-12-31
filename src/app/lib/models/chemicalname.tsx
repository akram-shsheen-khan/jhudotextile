import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const ChemicalNameSchema = new mongoose.Schema({
  chemicalname: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.ChemicalName ||
  mongoose.model("ChemicalName", ChemicalNameSchema);
