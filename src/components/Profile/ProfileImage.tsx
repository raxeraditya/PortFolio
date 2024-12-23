import { motion } from "framer-motion";

export function ProfileImage() {
  return (
    <div className="relative w-full max-w-[320px] aspect-square mx-auto md:mx-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
          style={{ transform: "scale(0.98)" }}
        />
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-full border-4 border-white dark:border-gray-800"
          whileHover={{ scale: 1.02 }}
          style={{ transform: "scale(0.95)" }}
        >
          <img
            src="/aditya.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
