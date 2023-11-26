import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const ColorSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Color || mongoose.model("Color", ColorSchema);
