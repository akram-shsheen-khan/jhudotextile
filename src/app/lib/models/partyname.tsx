import mongoose from "mongoose";

const PartyNameSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  partyname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.PartyName ||
  mongoose.model("PartyName", PartyNameSchema);
