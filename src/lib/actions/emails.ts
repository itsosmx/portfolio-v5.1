"use server"
import emailjs from '@emailjs/browser';


export async function sendEmail(e: FormData) {
  try {
    emailjs.init(process.env.EMAILJS_KEY as string);
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

    // const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    const response = await emailjs.send(
      data.service_id,
      data.template_id,
      data.template_params,
      {
        publicKey: data.user_id
      }
    );

    console.log('SUCCESS...', response);

  } catch (error) {
    console.log('FAILED...', error);
  }
}