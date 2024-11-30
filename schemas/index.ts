// Validation schemas for both frontend and backend using zod

import * as z from "zod";

/**
 * Validation schema for Login Form:
 * valid email address, non-empty password (allow old password rules)
 */
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

/**
 * Validation schema for Register Form:
 * valid email address, password with at least 6 characters, non-empty name
 */
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

// Other schemas, same logic

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});
