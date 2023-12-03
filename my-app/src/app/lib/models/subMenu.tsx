import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const subMenuSchema = new mongoose.Schema({
  submenu_id: {
    type: Number,
  },
  menu_id: {
    type: Number,
  },
  submenu_name: {
    type: String,
    required: true,
  },
  submenu_url: {
    type: String,
    required: true,
  },
  submenu_icon: {
    type: String,
    required: true,
  },
  submenu_status: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.subMenu ||
  mongoose.model("subMenu", subMenuSchema);
