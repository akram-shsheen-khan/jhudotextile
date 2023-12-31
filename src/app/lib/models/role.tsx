import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: Number,
});

export default mongoose.models.Role || mongoose.model("Role", RoleSchema);
