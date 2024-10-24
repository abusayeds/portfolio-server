import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    frontendTechnology: z.string().min(1, "Frontend technology is required"),
    backendTechnology: z.string().min(1, "Backend technology is required"),
    designTechnology: z.string().min(1, "Development technology is required"),
    projectLiveLink: z.string().url("Project live link must be a valid URL"),
    serverLiveLink: z
      .string()
      .url("Server live link must be a valid URL")
      .optional(),
    githubClientCodeLink: z
      .string()
      .url("GitHub client code link must be a valid URL"),
    images: z.string().url("Images link must be a valid URL"),
    githubServerCodeLink: z
      .string()
      .url("GitHub server code link must be a valid URL")
      .optional(),
    description: z.string().min(1, "Description is required"),
    commit: z.string().min(1, "commit is required"),
    title: z.string().min(1, "title is required"),

    pages: z.string().min(1, "pages is required"),
    projectOverViewVideoLink: z
      .string()
      .url("Project overview video link must be a valid URL")
      .optional(),
  }),
});
const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    frontendTechnology: z
      .string()
      .min(1, "Frontend technology is required")
      .optional(),
    backendTechnology: z
      .string()
      .min(1, "Backend technology is required")
      .optional(),
    designTechnology: z
      .string()
      .min(1, "Development technology is required")
      .optional(),
    projectLiveLink: z
      .string()
      .url("Project live link must be a valid URL")
      .optional(),
    serverLiveLink: z
      .string()
      .url("Server live link must be a valid URL")
      .optional(),
    githubClientCodeLink: z
      .string()
      .url("GitHub client code link must be a valid URL")
      .optional(),
    images: z.string().url("Images link must be a valid URL").optional(),
    githubServerCodeLink: z
      .string()
      .url("GitHub server code link must be a valid URL")
      .optional()
      .optional(),
    description: z.string().min(1, "Description is required").optional(),
    commit: z.string().min(1, "commit is required").optional(),
    title: z.string().min(1, "title is required").optional(),
    pages: z.string().min(1, "pages is required").optional(),
    projectOverViewVideoLink: z
      .string()
      .url("Project overview video link must be a valid URL")
      .optional(),
  }),
});

export const projectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
