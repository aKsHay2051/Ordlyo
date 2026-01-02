"use server";

import { waitlistSchema, WaitlistFormValues } from "@/lib/validators";

// This is a mock database call. In a real application, you would
// connect to and save the data in a database like MongoDB.
async function saveToDatabase(data: WaitlistFormValues) {
  console.log("Saving waitlist submission to database:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error for demonstration
  if (data.contact.includes("error")) {
    throw new Error("Simulated database error.");
  }
  
  return { id: new Date().toISOString() };
}

export async function submitWaitlist(
  data: WaitlistFormValues
): Promise<{ success: boolean; message?: string }> {
  const validatedFields = waitlistSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check your input and try again.",
    };
  }

  try {
    await saveToDatabase(validatedFields.data);
    return { success: true, message: "You've been added to the waitlist!" };
  } catch (error) {
    console.error("Failed to save waitlist submission:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
