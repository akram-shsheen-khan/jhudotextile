import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const DyesStockSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  dyesname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.DyesStock ||
  mongoose.model("DyesStock", DyesStockSchema);
