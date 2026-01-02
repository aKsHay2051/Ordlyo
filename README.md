# Ordlyo: WhatsApp Order Management MVP

This document outlines the technical design, architecture, and build plan for the Ordlyo MVP. The goal is to rapidly validate a core solution for micro-sellers who manage orders manually via WhatsApp.

**Mindset**: Build a focused, reliable, and simple solution to test the primary hypothesis: *Can we simplify order management for WhatsApp-based sellers?*

---

## 1. System Architecture

The architecture is designed to be simple, scalable, and cost-effective, leveraging serverless functions and managed services.

```
[WhatsApp User] <--> [WhatsApp Cloud API] <--> [Next.js API Route (Webhook)] <--> [MongoDB Atlas]
                                                           |
                                                           |
                                               [Seller Dashboard (Next.js)]
```

**Flow:**
1.  **Order Placement**: A customer sends a message to the seller's WhatsApp business number.
2.  **Webhook Trigger**: The WhatsApp Cloud API receives the message and forwards it to a predefined Next.js API route (`/api/whatsapp`) in our application.
3.  **Message Processing**: The API route parses the incoming message, validates its format, and extracts order details.
4.  **Database Interaction**: The extracted data is used to create or update an `Order` document in the MongoDB Atlas database.
5.  **Confirmation Reply**: The API route sends a confirmation message back to the customer via the WhatsApp Cloud API.
6.  **Seller Dashboard**: The seller logs into a simple, mobile-first web dashboard (a Next.js app) to view and manage all orders fetched from the database.

---

## 2. MongoDB Schemas

The database schema is intentionally minimal to support the MVP scope. We will use two primary collections.

### `orders` Collection
Stores every order captured from WhatsApp.

```json
{
  "_id": "ObjectId",
  "sellerId": "ObjectId", // Links to the user who owns this order
  "customer": {
    "name": "String", // Extracted from message
    "phone": "String" // Sender's WhatsApp number (from webhook payload)
  },
  "items": "String", // Free-text for simplicity (e.g., "1x Blue Shirt, 2x Red Scarf")
  "address": "String", // Free-text shipping address
  "status": {
    "type": "String", // "new", "confirmed", "shipped", "cancelled"
    "default": "new"
  },
  "source": {
    "type": "String", // "whatsapp"
    "default": "whatsapp"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### `users` Collection
Stores seller information. For the MVP, this can be as simple as their login credentials and WhatsApp Business number.

```json
{
  "_id": "ObjectId",
  "email": "String", // For login
  "password": "String", // Hashed password
  "businessName": "String",
  "whatsappBusinessNumber": "String", // The number linked to the WhatsApp API
  "createdAt": "Date"
}
```
*Note: A separate `customers` collection is out of scope for the MVP to maintain simplicity. Customer data will be embedded within orders.*

---

## 3. WhatsApp Message Parsing Strategy

To avoid the complexity of AI/NLP, we will enforce a simple, structured message format for orders. Sellers will be instructed to share this format with their customers.

**Proposed Format:**
```
Order: <Item 1>, <Item 2>, ...
Name: <Customer Name>
Address: <Full Address>
```

**Parsing Logic (in `/api/whatsapp`):**
- Use a simple regular expression or string splitting to parse the message.
- Split the message by newlines (`\n`).
- For each line, check for keywords like `Order:`, `Name:`, and `Address:`.
- Extract the text following the keyword.
- If the format is invalid, we can either ignore it or (better for UX) send a reply asking the customer to use the correct format.

---

## 4. API Routes & Server Actions

We will use a combination of Next.js API Routes for external webhooks and Server Actions for internal frontend operations.

- **`POST /api/whatsapp` (API Route):**
  - **Purpose**: Receives incoming message webhooks from the WhatsApp Cloud API.
  - **Logic**:
    1.  Verifies the webhook signature from Meta.
    2.  Handles initial webhook handshake/verification.
    3.  Parses the incoming message payload.
    4.  Calls a service function to create the order in MongoDB.
    5.  Triggers the confirmation message back to the user.
  - **Security**: Must be a public endpoint but secured with Meta's verification token.

- **`submitWaitlist` (Server Action):**
  - **File**: `src/app/actions.ts`
  - **Purpose**: Handles the waitlist form submission from the landing page.
  - **Logic**: Validates input and saves lead data to the `waitlist` collection in MongoDB.

- **`login` & `logOut` (Server Actions):**
  - **File**: `src/app/actions.ts`
  - **Purpose**: Manage the seller's session for the admin dashboard.
  - **Logic**: Validates hardcoded credentials, creates/destroys a session cookie.

- **`getLeads` (Server Action):**
  - **File**: `src/app/actions.ts`
  - **Purpose**: Fetches all leads from the `waitlist` collection for the admin page.

- **`getOrders` & `updateOrderStatus` (Server Actions - Future):**
  - These will be created to fetch orders for the seller dashboard and update their status.

---

## 5. UI Pages & Flows

The user interface will be minimal, mobile-first, and focused on clarity.

1.  **Landing Page (`/`)**:
    - **Purpose**: Explain the product and capture waitlist signups.
    - **Components**: `HeroSection`, `ProblemSection`, `HowItWorksSection`, `WhoItsForSection`, `WaitlistSection`.
    - **Flow**: User reads about the product -> Fills out the waitlist form -> Sees a success message.

2.  **Admin Login Page (`/admin/login`)**:
    - **Purpose**: Secure access to the seller dashboard.
    - **Components**: A simple form with email and password fields.

3.  **Admin Leads Page (`/admin/leads`)**:
    - **Purpose**: Allow the "admin" (us) to view waitlist signups.
    - **Components**: A simple table displaying the collected leads.

4.  **Seller Dashboard Page (`/dashboard` - Future):**
    - **Purpose**: The main interface for sellers to view and manage their orders.
    - **Components**:
        - Order List: A list of cards, each representing an order.
        - Filters: Buttons to filter orders by status (`New`, `Confirmed`, `Shipped`).
        - Order Card: Shows customer name, items, and status. Clicking it could expand to show the full address.
        - Status Changer: Simple buttons/dropdown on each order card to update the status.

---

## 6. Error Handling & Edge Cases

- **Invalid WhatsApp Message Format**: If an incoming message doesn't match the expected format, the system will not create an order. Optionally, it can send a reply asking the customer to resend in the correct format.
- **Duplicate Orders**: For now, we assume every message is a new order. Deduplication is out of scope for the MVP.
- **Database Connection Failure**: The API route and server actions must handle potential DB connection errors gracefully and log them. The user (seller/customer) should see a generic "something went wrong" message.
- **WhatsApp API Failure**: If the confirmation message fails to send, the error should be logged, but it should not block the order creation process.

---

## 7. Step-by-Step Build Plan (Approx. 7-10 Days)

This plan prioritizes validating the core loop as quickly as possible.

- **Day 1: Project Setup & Landing Page**
  - [x] Initialize Next.js project.
  - [x] Create the multi-section landing page UI with Tailwind CSS.
  - [x] Implement the waitlist form.

- **Day 2: Database & Waitlist Backend**
  - [x] Set up MongoDB Atlas cluster.
  - [x] Create the `submitWaitlist` server action to save leads to a `waitlist` collection.
  - [x] Create the protected admin page to view leads.

- **Day 3-4: WhatsApp Webhook Integration (Core Logic)**
  - Set up a Meta Developer App and configure the WhatsApp Cloud API.
  - Create the `/api/whatsapp` API route.
  - Implement webhook verification logic.
  - Implement the message parsing logic for the fixed format.

- **Day 5: Order Creation & Confirmation**
  - Implement the logic inside the webhook to create an `Order` document in MongoDB.
  - Integrate the WhatsApp Cloud API SDK to send a hardcoded "Order Received" confirmation message back to the customer.

- **Day 6-7: Seller Dashboard UI**
  - Design and build the `/dashboard` page.
  - Create the order list and order card components.
  - Implement basic filters for order status.

- **Day 8: Seller Dashboard Backend**
  - Create the `getOrders` server action to fetch orders for the logged-in seller.
  - Create the `updateOrderStatus` server action to allow sellers to change an order's status.

- **Day 9: Testing & Refinements**
  - End-to-end testing of the entire flow: from a customer sending a WhatsApp message to the seller seeing it on their dashboard.
  - Test on various mobile devices.
  - Refine UI/UX based on self-testing.

- **Day 10: Deployment & Go-Live**
  - Configure production environment variables on Vercel.
  - Deploy the application.
  - Point the WhatsApp webhook to the production URL.
  - Start onboarding the first few test users.
