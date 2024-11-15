import { model, Schema } from "mongoose";
import { TCV } from "./Cv-servise";

const blogSchema = new Schema<TCV>(
  {
    cv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const CvModel = model<TCV>("CV", blogSchema);
