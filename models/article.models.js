import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  public: { type: Date, default: new Date() },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
  featured_image: { type: String, default: "" },
  visibility: { type: Boolean, default: true },
  author_id: { type: String, required: true },
  category_id: { type: String, required: true },
  tags: { type: Array, default: [] },
  slug: { type: String, required: true },
  meta_title: { type: String, required: true },
  meta_description: { type: String, required: true },
  read: { type: Number, default: 0 },
  like_count: { type: Number, default: 0 },
});

export default mongoose.model("articles", schema);
