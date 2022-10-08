import mongoose from "mongoose";

const schema = mongoose.Schema({
  content: { type: String, require: true },
  author_id: { type: String, require: true },
  article_id: { type: String, require: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

export default mongoose.model("articles", schema);
