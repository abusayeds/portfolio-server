import { model, Schema } from "mongoose";
import { TBlog, TContentDetails } from "./blog-interface";

const contentDetailsSchema = new Schema<TContentDetails>({
  contentTitle: { type: String, required: true },
  contentImg: { type: String },
  contentDescription: { type: String, required: true },
});
const blogSchema = new Schema<TBlog>({
  authorName: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  blogImg: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  contentDetails: {
    type: [contentDetailsSchema],
    required: true,
  },
});
export const blogModel = model<TBlog>("Blog", blogSchema);
