import mongoose from "mongoose";

/* TransactionSchema will correspond to the recipe collection in the MongoDB database. */
const TransactionSchema = new mongoose.Schema({
  id: Number,
  dated: String,
  partyname: String,
  partychallanno: String,
  pono: String,
  partylotno: String,
  process: String,
  color: String,
  quality: String,
  roll: Number,
  receivedweight: Number,
  challanno: Number,
  lotno: Number,
  deliveredroll: Number,
  deliveredweight: Number,
  billingweight: Number,
  rate: Number,
  amount: Number,
  type: String,
  trans_id: String,
});

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
