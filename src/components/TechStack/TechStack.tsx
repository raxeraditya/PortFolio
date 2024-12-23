import { motion } from "framer-motion";
import { TechCard } from "./TechCard";
import { technologies } from "../../Data/techData";

export function TechStack() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Technologies & Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
