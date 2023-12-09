import mongoose from "mongoose";

const FabricIssuedSchema = new mongoose.Schema({
  issueddate: {
    type: String,
    required: true,
  },
  partyname: {
    type: String,
    required: true,
  },
  challanno: {
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
  color: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  lotno: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  deliveredweight: {
    type: Number,
    required: true,
  },
  wastageweight: {
    type: Number,
    required: true,
  },
  billingweight: {
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

export default mongoose.models.FabricIssued ||
  mongoose.model("FabricIssued", FabricIssuedSchema);
