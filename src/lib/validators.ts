import * as z from "zod";

// A simple regex for phone numbers, allowing for international formats.
// This is not exhaustive but covers many common cases for a global audience.
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3,4}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const waitlistSchema = z.object({
  contact: z.string()
    .min(1, { message: "WhatsApp number is required." })
    .regex(phoneRegex, "Please enter a valid phone number."),
  productType: z.string().optional(),
  dailyOrders: z.string().optional(),
  trackingMethod: z.string().optional(),
  priceComfort: z.string().optional(),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;


export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type LoginValues = z.infer<typeof loginSchema>;
