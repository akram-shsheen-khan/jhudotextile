import mongoose from "mongoose";

/* HBChemicalConsumptionSchema will correspond to the recipe collection in the MongoDB database. */
const HBChemicalConsumptionSchema = new mongoose.Schema({
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

export default mongoose.models.HBChemicalConsumption ||
  mongoose.model("HBChemicalConsumption", HBChemicalConsumptionSchema);
