import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const ChemicalStockSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  chemicalname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.ChemicalStock ||
  mongoose.model("ChemicalStock", ChemicalStockSchema);
