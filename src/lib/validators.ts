import * as z from "zod";

// A simple regex for phone numbers, allowing for international formats.
// This is not exhaustive but covers many common cases for a global audience.
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3,4}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const waitlistSchema = z.object({
  contact: z.string().min(1, { message: "Email or phone number is required." }),
  feedback: z.string().max(500, { message: "Feedback must be 500 characters or less."}).optional(),
}).superRefine((data, ctx) => {
    const isEmail = z.string().email().safeParse(data.contact).success;
    const isPhone = phoneRegex.test(data.contact);

    if (!isEmail && !isPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter a valid email or phone number.",
        path: ["contact"],
      });
    }
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;


export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type LoginValues = z.infer<typeof loginSchema>;
