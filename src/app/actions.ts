"use server";

import { MongoClient, WithId, Document } from "mongodb";
import { waitlistSchema, WaitlistFormValues, loginSchema, LoginValues } from "@/lib/validators";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

// Ensure the MongoDB URI is set in your environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "ordlyo";

const key = new TextEncoder().encode(process.env.AUTH_SECRET);

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
if(!process.env.AUTH_SECRET) {
  throw new Error("Please define the AUTH_SECRET environment variable inside .env.local");
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

export async function getLeads(): Promise<{ leads: WithId<Document>[] | null; error: string | null; }> {
    try {
        const client = await connectToDatabase();
        const db = client.db(dbName);
        const collection = db.collection("waitlist");
        const leads = await collection.find({}).sort({ submittedAt: -1 }).toArray();
        return { leads, error: null };
    } catch (error) {
        console.error('Failed to fetch leads:', error);
        return { leads: null, error: 'Failed to fetch leads. Please try again later.' };
    }
}


export async function login(data: LoginValues) {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid email or password." };
  }

  const { email, password } = validatedFields.data;

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // Create session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await encrypt({ user: { email }, expires });
    
    // Save session in a cookie
    cookies().set('session', session, { expires, httpOnly: true });

  } else {
    return { error: 'Invalid email or password.' };
  }

  redirect('/admin/leads');
}

export async function logOut() {
    cookies().set('session', '', { expires: new Date(0) });
    redirect('/admin/login');
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch(e) {
        return null;
    }
}

export async function getSession() {
  const sessionCookie = cookies().get('session')?.value;
  if (!sessionCookie) return null;
  return await decrypt(sessionCookie);
}
