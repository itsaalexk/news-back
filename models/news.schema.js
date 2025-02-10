import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  archiveDate: { type: String, default: null },
  achieved: { type: Boolean, required: true, default: false },
  isFavorite: { type: Boolean, required: true, default: false },
});

export const News = mongoose.model("News", newsSchema);
