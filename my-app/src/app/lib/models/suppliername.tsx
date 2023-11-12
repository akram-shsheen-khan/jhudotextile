import mongoose from "mongoose";

/* SupplierNameSchema will correspond to the recipe collection in the MongoDB database. */
const SupplierNameSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  suppliername: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.SupplierName ||
  mongoose.model("SupplierName", SupplierNameSchema);
