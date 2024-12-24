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
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "Missing EmailJS configuration. Please check your environment variables."
    );
  }

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
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(
      `Failed to send email. ${error instanceof Error ? error.message : error}`
    );
  }
}
