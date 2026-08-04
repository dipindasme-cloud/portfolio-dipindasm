import { NextResponse } from "next/server";

// Simple robust regex for server-side email format validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Strict Type Validation
    if (
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.message !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid payload format." },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const message = body.message.trim();
    const botcheck = Boolean(body.botcheck);

    // 2. Server-Side Honeypot Trap
    if (botcheck) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully!" },
        { status: 200 }
      );
    }

    // 3. Presence & Length Guardrails
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Payload size limit exceeded." },
        { status: 400 }
      );
    }

    // 4. Server-Side Email Format Check
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      console.error("WEB3FORMS_ACCESS_KEY is missing in environment variables.");
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    // 5. Proxy to Web3Forms Server-to-Server
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        name,
        email,
        message,
        subject: `New Portfolio Contact from ${name}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully!" });
    }

    return NextResponse.json(
      { success: false, message: "Failed to deliver message." },
      { status: 500 }
    );
  } catch (_error) {
    // Prefix with underscore to fix ESLint unused-var warning
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}