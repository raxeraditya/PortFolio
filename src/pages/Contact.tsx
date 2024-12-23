import { motion } from "framer-motion";
import { Mail, MapPin, Phone, FileDown } from "lucide-react";
import { ContactForm } from "../components/Contact/ContactForm";

export function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get in Touch
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    aditya1596k@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9760157737
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Etawah, UttarPradesh
                  </p>
                </div>
              </div>

              <motion.a
                href="/DevResumeNew.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
