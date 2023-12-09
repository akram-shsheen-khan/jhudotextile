import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const DyesPurchasingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  challanno: {
    type: String,
    required: true,
  },
  dyesname: {
    type: String,
    required: true,
  },
  suppliername: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.DyesPurchasing ||
  mongoose.model("DyesPurchasing", DyesPurchasingSchema);
