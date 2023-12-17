import mongoose from "mongoose";

/* DyesNameConsumptionSchema will correspond to the recipe collection in the MongoDB database. */
const DyesNameConsumptionSchema = new mongoose.Schema({
  dyeingdate: {
    type: String,
    required: true,
  },
  lotno: {
    type: String,
    required: true,
  },
  dyesname: {
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

export default mongoose.models.DyesNameConsumption ||
  mongoose.model("DyesNameConsumption", DyesNameConsumptionSchema);
