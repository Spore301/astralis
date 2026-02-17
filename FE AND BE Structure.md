# Technical Requirement Document (TRD)

**Project:** Astrology Life Report MVP

**Version:** 1.0

**Date:** February 18, 2026

## 1\. System Overview

The platform is a web application that generates personalized astrology reports.

*   **Core Loop:** User enters birth data $\\rightarrow$ Authentication Check $\\rightarrow$ Payment $\\rightarrow$ Report Generation (Planetary Calculation + LLM Interpretation) $\\rightarrow$ PDF Delivery.
*   **Key Constraint:** Unauthenticated users can fill the form but must log in/sign up (and verify email) before payment.

## 2\. Frontend Specifications (Client-Side)

**Tech Stack:** React.js, Tailwind CSS, Axios (for API calls), React Router.

### 2.1 Architecture & State Management

*   **State Management (Context API or Redux):**
    *   **UserContext:** Stores authentication status (isLoggedIn, token, userProfile).
    *   **OrderContext:** crucial for the flow. It must verify the birthDetails (Name, Date, Time, Place) entered on the landing page persist through the Login/Signup redirects.
    *   _Storage:_ Use sessionStorage to temporarily hold birthDetails if the user is redirected to Auth.

### 2.2 Frontend Routes & Logic

| Route | Page Name | Functionality |
| --- | --- | --- |
| / | Landing Page | Displays "Get Life Report" CTA. |
| /generate-report | Input Form | Form for Birth Date, Time, Place.Logic: On "Submit", check UserContext.$\rightarrow$ If loggedIn: Redirect to /payment.$\rightarrow$ If !loggedIn: Save data to storage, redirect to /login. |
| /login | Login | Standard Email/Pass login.Success: Check storage. If birthDetails exist, redirect to /payment. Else go to Dashboard. |
| /signup | Signup | Standard Registration.Success: Show "Verify Email" UI. |
| /verify-email | Verification | Captures token from URL (?token=xyz). Calls Backend API.Success: Redirect to /payment (if birthDetails exist). |
| /payment | Payment Gateway | Integration with Stripe/Razorpay SDK. |
| /dashboard | User Dashboard | List of past reports. Download buttons. |

### 2.3 Frontend Components (Key Requirements)

1.  **AuthGuard:** A Higher-Order Component (HOC) that protects the /payment route. It should verify not just that the user is logged in, but that user.isVerified === true.
2.  **PollingComponent:** On the "Order Success" screen, this component pings the backend every 3 seconds to check if the PDF is ready (status: 'COMPLETED') to enable the "Download" button.

## 3\. Backend Specifications (Server-Side)

**Tech Stack:** Node.js (Express), PostgreSQL (Prisma or Sequelize ORM), PDFKit (Report Gen).

### 3.1 Architecture

*   **REST API:** JSON-based communication.
*   **Worker Pattern:** Report generation is heavy (Astrology Calc + LLM + PDF Gen). It should ideally be handled asynchronously (using a queue like BullMQ) or strictly awaited if traffic is low.

### 3.2 Database Schema (PostgreSQL)

**Users Table**

*   id: UUID (Primary Key)
*   email: String (Unique)
*   password\_hash: String
*   is\_verified: Boolean (Default: false)
*   verification\_token: String

**Reports Table**

*   id: UUID (Primary Key)
*   user\_id: UUID (Foreign Key)
*   birth\_details: JSONB ({ date, time, lat, long, name })
*   status: ENUM (PENDING\_PAYMENT, PROCESSING, COMPLETED, FAILED)
*   pdf\_url: String (S3/Cloudinary URL)
*   transaction\_id: String

### 3.3 Backend API Endpoints

#### A. Authentication Module

1.  **POST /api/auth/signup**
    *   **Input:** { email, password, name }
    *   **Action:** Create user, generate token, send email via SendGrid/AWS SES.
2.  **GET /api/auth/verify**
    *   **Input:** ?token=xyz
    *   **Action:** Update is\_verified = true.
3.  **POST /api/auth/login**
    *   **Action:** Validate creds + check is\_verified. Return JWT.

#### B. Order Module

1.  **POST /api/orders/create** (Protected)
    *   **Input:** { birth\_details }
    *   **Action:** Create Report record with status PENDING\_PAYMENT. Initiate Payment Gateway intent.
    *   **Output:** { order\_id, payment\_client\_secret }
2.  **POST /api/webhooks/payment** (Public)
    *   **Action:** Listen for Payment Success event. Update Report status to PAID. **Trigger Generation Service.**

#### C. Generation Service (The "Brain")

This is an internal function triggered after successful payment.

1.  **Step 1: Ephemeris Calculation**
    *   Use a library like swisseph (Swiss Ephemeris Node wrapper) or an external API to get planetary positions (e.g., "Sun in Aries", "Moon in 5th House").
2.  **Step 2: LLM Interpretation**
    *   **Input:** Send the planetary data to Gemini API.
    *   **Prompt:** _"Act as an expert Vedic Astrologer. Given \[Planetary Data\], write a 300-word analysis on Career and Relationships."_
3.  **Step 3: PDF Generation**
    *   Use PDFKit.
    *   Draw the chart (SVG/Canvas).
    *   Inject the text from Gemini.
4.  **Step 4: Storage**
    *   Upload PDF to Cloud Storage (AWS S3).
    *   Update DB with pdf\_url and set status COMPLETED.

## 4\. Integration & Security

*   **CORS:** Allow requests only from your Frontend domain.
*   **Environment Variables:** Store API Keys (Gemini, Stripe, DB URL) in .env file. NEVER commit these to GitHub.
*   **Rate Limiting:** Implement express-rate-limit to prevent abuse of the Free Astrology API/Gemini API.

## 5\. Deployment Strategy

*   **Frontend:** Vercel or Netlify (CI/CD connected to Git).
*   **Backend:** Render, Railway, or AWS EC2.
*   **Database:** Supabase or AWS RDS (Managed PostgreSQL).