import mongoose from "mongoose";

const schema = mongoose.Schema({
  article_id: { type: String, required: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

export default mongoose.model("articles", schema);
