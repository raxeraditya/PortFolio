import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "ak555666333888@gmail.com",
      },
      PUBLIC_KEY
    );
  } catch (error) {
    // console.error("Email sending failed:", error);
    throw new Error(`Failed to send email ${JSON.stringify(error)}`);
    // console.log(`${JSON.stringify(error)}`);
  }
}
