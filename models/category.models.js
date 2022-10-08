import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String, require: true },
  content: { type: String, require: true },
  featured_image: { type: String },
  visibility: { type: Boolean, default: true },
  author_id: { type: String, require: true },
  category_id: { type: String, require: true },
  tag: { type: String },
  public: { type: Date, default: new Date() },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

export default mongoose.model("users", schema);
