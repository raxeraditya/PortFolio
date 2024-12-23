import { useState } from "react";
import { EmailData, sendEmail } from "../services/email";

interface UseEmailForm {
  formData: EmailData;
  status: "idle" | "sending" | "success" | "error";
  error: string | null;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export function useEmailForm(): UseEmailForm {
  const [formData, setFormData] = useState<EmailData>({
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      await sendEmail(formData);
      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  };

  return {
    formData,
    status,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
