import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const QualitySchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  quality: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Quality ||
  mongoose.model("Quality", QualitySchema);
