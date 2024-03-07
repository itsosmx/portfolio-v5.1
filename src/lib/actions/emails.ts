"use server"
import emailjs from '@emailjs/nodejs';


export async function sendEmail({ name, email, message }: { name: string, email: string, message: string }) {
  try {
    const response = await emailjs.send(process.env.EMAILJS_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, {
      name,
      email,
      message
    }, {
      publicKey: process.env.EMAILJS_KEY as string
    });
    return response;
  } catch (error) {
    console.log('FAILED...', error);
  }
}