"use server";

import { waitlistSchema, WaitlistFormValues } from "@/lib/validators";

// This is a mock of sending a WhatsApp message. In a real application,
// you would use a service like Twilio or the WhatsApp Business API.
async function sendWhatsAppMessage(data: WaitlistFormValues) {
  const projectName = "OrderEase";
  const message = `
New lead from ${projectName}!
Contact: ${data.contact}
Feedback: ${data.feedback || "No feedback provided."}
  `;

  console.log("--- SIMULATING WHATSAPP MESSAGE ---");
  console.log(`To: [Your WhatsApp Number]`);
  console.log(`Message: ${message}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error for demonstration
  if (data.contact.includes("error")) {
    throw new Error("Simulated API error.");
  }
  
  return { success: true };
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
    await sendWhatsAppMessage(validatedFields.data);
    return { success: true, message: "You've been added to the waitlist!" };
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
