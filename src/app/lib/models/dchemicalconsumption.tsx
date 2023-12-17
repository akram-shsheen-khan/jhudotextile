import mongoose from "mongoose";

/* DChemicalConsumptionSchema will correspond to the recipe collection in the MongoDB database. */
const DChemicalConsumptionSchema = new mongoose.Schema({
  dyeingdate: {
    type: String,
    required: true,
  },
  lotno: {
    type: String,
    required: true,
  },
  chemicalname: {
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

export default mongoose.models.DChemicalConsumption ||
  mongoose.model("DChemicalConsumption", DChemicalConsumptionSchema);
