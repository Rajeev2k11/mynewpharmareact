// src/validation/companyDetailsSchema.ts
import { z } from "zod";

export const companyDetailsSchema = z.object({
  companyName: z.string().min(1, "Please enter this field."),
  countryRegion: z.string().min(1, "Please enter this field."),
  companyDescription: z.string().optional(),
  phoneNo: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  businessAddress: z.string().optional(),
  state: z.string().min(1, "Please enter this field."),
  city: z.string().min(1, "Please enter this field."),
  zipCode: z.string().regex(/^\d+$/, "Zip code must be numeric."),
});