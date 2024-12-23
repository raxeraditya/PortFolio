import { motion } from "framer-motion";
import { TechStack } from "../components/TechStack/TechStack";
import { About } from "../components/About/About";
import { ProfileImage } from "../components/Profile/ProfileImage";

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Aditya Kushwah
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full Stack Developer passionate about creating elegant solutions
                to complex problems. Specialized in modern web technologies and
                scalable applications.
              </p>
            </motion.div>

            <div className="order-1 md:order-2">
              <ProfileImage />
            </div>
          </div>
        </section>

        <About />
        <TechStack />

        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With expertise in both frontend and backend development, I can
              help bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
