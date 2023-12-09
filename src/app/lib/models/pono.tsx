import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const PonoSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  pono: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Pono || mongoose.model("Pono", PonoSchema);
