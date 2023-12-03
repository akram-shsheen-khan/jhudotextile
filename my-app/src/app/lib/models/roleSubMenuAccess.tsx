import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const roleSubMenuAccessSchema = new mongoose.Schema({
  submenu_access_id: {
    type: Number,
    required: true,
  },
  menu_id: {
    type: Number,
    required: true,
  },
  submenu_id: {
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
  role_submenu_accesscol: {
    type: String,
    required: true,
  },
});

export default mongoose.models.roleSubMenuAccess ||
  mongoose.model("roleSubMenuAccess", roleSubMenuAccessSchema);
