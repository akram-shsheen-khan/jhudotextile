import mongoose from "mongoose";

const MachineNoSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  machineno: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.MachineNo ||
  mongoose.model("MachineNo", MachineNoSchema);
