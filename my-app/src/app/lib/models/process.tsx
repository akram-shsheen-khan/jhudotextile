import mongoose from "mongoose";

const ProcessSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  process: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Process ||
  mongoose.model("Process", ProcessSchema);
