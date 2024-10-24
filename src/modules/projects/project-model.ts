import { Schema, model } from "mongoose";

import { TProject } from "./project-interface";

const userSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    frontendTechnology: {
      type: String,

      required: true,
    },

    backendTechnology: {
      type: String,
      required: true,
    },
    designTechnology: {
      type: String,
      required: true,
    },
    projectLiveLink: {
      type: String,
      required: true,
    },
    serverLiveLink: {
      type: String,
    },
    githubClientCodeLink: {
      type: String,
      required: true,
    },
    githubServerCodeLink: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    commit: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    pages: {
      type: String,
      required: true,
    },
    projectOverViewVideoLink: {
      type: String,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

export const ProjectModel = model<TProject>("Project", userSchema);
