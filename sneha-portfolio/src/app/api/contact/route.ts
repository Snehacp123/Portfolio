import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Log the contact submission (replace with email service like Resend/Nodemailer)
    console.log("Contact form submission:", { name, email, message, timestamp: new Date().toISOString() });

    // TODO: Integrate with Resend, Nodemailer, or any email provider
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@snehacp.com',
    //   to: 'sneha@snehacp.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
