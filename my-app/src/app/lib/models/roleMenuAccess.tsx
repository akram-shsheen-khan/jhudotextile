import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const roleMenuAccessSchema = new mongoose.Schema({
  menu_access_id: {
    type: Number,
    required: true,
  },
  menu_id: {
    type: Number,
    required: true,
  },
  role_id: {
    type: Number,
    required: true,
  },
  user_permission: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.roleMenuAccess ||
  mongoose.model("roleMenuAccess", roleMenuAccessSchema);
