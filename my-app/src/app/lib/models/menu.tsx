import mongoose from "mongoose";

/* ChemicalNameSchema will correspond to the recipe collection in the MongoDB database. */
const MenuSchema = new mongoose.Schema({
  menu_id: {
    type: Number,
  },
  menu_name: {
    type: String,
  },
  menu_icon: {
    type: String,
    required: true,
  },
  menu_status: {
    type: Number,
    required: true,
  },
  menu_url: {
    type: String,
    required: true,
  },
  menu_has_sub_menu: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Menu || mongoose.model("menu", MenuSchema);
