"use server"

export async function sendEmail(e: FormData) {
  try {
    const data: any = {
      service_id: process.env.EMAILJS_SERVICE_ID as string,
      template_id: process.env.EMAILJS_TEMPLATE_ID as string,
      user_id: process.env.EMAILJS_KEY as string,
      template_params: {
        name: e.get("name") as string,
        email: e.get("email") as string,
        message: e.get("message") as string
      }
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log('SUCCESS...', response);

  } catch (error) {
    console.log('FAILED...', error);
  }
}