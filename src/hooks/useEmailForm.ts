import { useState } from "react";
import { sendEmail } from "../services/email";

export function useEmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      // Replace this with your sendEmail function
      await sendEmail(formData);
      setStatus("success");
    } catch (err) {
      setError("Failed to send email. Please try again.");
      setStatus("error");
    }
  };

  const resetStatus = () => {
    setStatus("idle");
    setError(null);
  };

  return { formData, status, error, handleChange, handleSubmit, resetStatus };
}
