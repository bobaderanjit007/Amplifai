import { z } from "zod"

/**
 * Validation schemas using Zod
 */

// Login form validation schema
export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

// Registration form validation schema
export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

// Add company form validation schema
export const addCompanySchema = z.object({
  name: z.string().min(1, "Company name is required").min(2, "Company name must be at least 2 characters"),
  ceo: z.string().min(1, "CEO name is required").min(2, "CEO name must be at least 2 characters"),
  revenue: z
    .string()
    .min(1, "Revenue is required")
    .regex(/^€\d+(\.\d+)?[KMB]?$/, "Revenue must be in format €123M or €123.5M"),
  profit: z
    .string()
    .min(1, "Profit is required")
    .regex(/^-?€\d+(\.\d+)?[KMB]?$/, "Profit must be in format €123M or -€123M"),
  ebitda: z
    .string()
    .min(1, "EBITDA is required")
    .regex(/^-?€\d+(\.\d+)?[KMB]?$/, "EBITDA must be in format €123M or -€123M"),
  grossMargin: z
    .string()
    .min(1, "Gross margin is required")
    .regex(/^\d+(\.\d+)?%$/, "Gross margin must be in format 12.5%"),
  insights: z.string().min(1, "Key insights are required").min(5, "Please provide meaningful insights"),
})

/**
 * Helper function to validate form data and return errors
 */
export const validateForm = (schema, data) => {
  try {
    schema.parse(data)
    return { success: true, errors: {} }
  } catch (error) {
    const errors = {}
    error.errors.forEach((err) => {
      errors[err.path[0]] = err.message
    })
    return { success: false, errors }
  }
}
