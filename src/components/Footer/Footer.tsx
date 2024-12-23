import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Connect With Me
            </h3>
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <p>
              © {new Date().getFullYear()} Aditya Kushwah. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
