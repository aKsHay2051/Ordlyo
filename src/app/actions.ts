"use server";

import { MongoClient } from "mongodb";
import { waitlistSchema, WaitlistFormValues } from "@/lib/validators";

// Ensure the MongoDB URI is set in your environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "ordlyo";

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri);
  cachedClient = await client.connect();
  return cachedClient;
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
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection("waitlist");

    const submission = {
      contact: validatedFields.data.contact,
      feedback: validatedFields.data.feedback || null,
      submittedAt: new Date(),
    };

    await collection.insertOne(submission);

    return { success: true, message: "You've been added to the waitlist!" };
  } catch (error) {
    console.error("Failed to save to MongoDB:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
