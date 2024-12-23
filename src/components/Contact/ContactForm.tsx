import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useEmailForm } from "../../hooks/useEmailForm";

export function ContactForm() {
  const { formData, status, error, handleChange, handleSubmit } =
    useEmailForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
             text-black dark:text-white outline-none transition-colors focus:border-blue-500 dark:focus:border-blue-400"
          placeholder=" "
          required
        />

        <label
          htmlFor="name"
          className="absolute left-2 -top-2.5 px-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
             text-black dark:text-white outline-none transition-colors focus:border-blue-500 dark:focus:border-blue-400"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute left-2 -top-2.5 px-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
             text-black dark:text-white outline-none transition-colors focus:border-blue-500 dark:focus:border-blue-400 resize-none"
          placeholder=" "
          required
        />

        <label
          htmlFor="message"
          className="absolute left-2 -top-2.5 px-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Message
        </label>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.div>
          )}
          {status === "sending" && (
            <motion.div
              key="sending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-5 h-5 animate-spin" />
            </motion.div>
          )}
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Sent Successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
