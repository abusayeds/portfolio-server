import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({ required_error: "Password is required" }),
  }),
});
const registationValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),

    password: z.string({ required_error: "Password is required" }),
    address: z.string({
      required_error: " address is required",
    }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  registationValidationSchema,
};
