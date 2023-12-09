import mongoose from "mongoose";

const CostingSheetSchema = new mongoose.Schema({
  dyeingdate: {
    type: String,
    required: true,
  },
  lotno: {
    type: String,
    required: true,
  },
  partyname: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  pono: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },

  weightkg: {
    type: Number,
    required: true,
  },
  halfbleachcost: {
    type: Number,
    required: true,
  },
  dyescost: {
    type: Number,
    required: true,
  },
  dyeingchemicalcost: {
    type: Number,
    required: true,
  },
  totalcost: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.CostingSheet ||
  mongoose.model("CostingSheet", CostingSheetSchema);
