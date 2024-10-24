import { z } from "zod";

const contentDetailsZodSchema = z.object({
  contentTitle: z.string().nonempty("Content title is required"),
  contentImg: z.string().optional(),
  contentDescription: z.string().nonempty("Content description is required"),
});

const createBlogValidationSchema = z.object({
  body: z.object({
    authorName: z.string().nonempty("Author name is required"),
    authorImg: z.string().optional(),
    blogImg: z.string().optional(),
    publishedDate: z.string().nonempty("Published date is required"),
    title: z.string().nonempty("Title is required"),

    contentDetails: z
      .array(contentDetailsZodSchema)
      .nonempty("Content details are required"),
  }),
});
const updatecontentDetailsZodSchema = z.object({
  contentTitle: z.string().nonempty("Content title is required").optional(),
  contentImg: z.string().optional(),
  contentDescription: z
    .string()
    .nonempty("Content description is required")
    .optional(),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    authorName: z.string().nonempty("Author name is required").optional(),
    authorImg: z.string().optional(),
    blogImg: z.string().optional(),
    publishedDate: z.string().nonempty("Published date is required").optional(),
    title: z.string().nonempty("Title is required").optional(),

    contentDetails: z
      .array(updatecontentDetailsZodSchema)
      .nonempty("Content details are required")
      .optional(),
  }),
});
export const blogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
