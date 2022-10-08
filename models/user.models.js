import mongoose from "mongoose";

const schema = mongoose.Schema({
  user_name: { type: String, require: true },
  email: { type: String, require: true },
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  gender: { type: String, require: true },
  phone: { type: String, require: true },
  password: { type: String, require: true },
  isActive: { type: Boolean, require: true, default: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

export default mongoose.model("users", schema);
