import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST(request: Request) {
  try {
    const form = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })


    const info = await transporter.sendMail({
      from: `"${form.name}" <${form.email}>`,
      to: process.env.SMTP_USER,
      subject: "New Message from Portfolio",
      html: `<p>${form.message}</p>`
    })


    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.log("FAILED...", error);

    return NextResponse.json({ error: "Failed to send message, please try again later." }, { status: 500 });
  }
}
