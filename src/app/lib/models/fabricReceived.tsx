import mongoose from "mongoose";

const FabricReceivedSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  partyname: {
    type: String,
    required: true,
  },
  partychallanno: {
    type: String,
    required: true,
  },
  pono: {
    type: String,
    required: true,
  },
  partylotno: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  receivedweight: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.FabricReceived ||
  mongoose.model("FabricReceived", FabricReceivedSchema);
