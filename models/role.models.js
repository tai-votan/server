import mongoose from "mongoose";

const schema = mongoose.Schema({
  user_id: { type: String, require: true },
  role_name: { type: String, require: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

export default mongoose.model("roles", schema);
