import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      {
        title: "Bachelor of Science Degree",
        place: "Chhatrapati Shahu Ji Maharaj University",
        year: "2023-2025",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Fresher && Freelancer",
    items: [
      {
        title: "Backend",
        place: "For Customer",
        year: "2022",
      },
      // {
      //   title: "Full Stack Developer",
      //   place: "Previous Company",
      //   year: "2020-2022",
      // },
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      {
        title: "National Institute of Electronics and Information Technology",
        place: "O level",
        year: "2024",
      },
    ],
  },
];

export function About() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About Me
          </h2>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer with over 4 years of working
              experience in building web applications. I specialize in creating
              scalable and maintainable solutions using modern technologies. My
              approach combines technical expertise with a strong focus on user
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className="border-l-2 border-blue-500 pl-4"
                      >
                        <h4 className="font-medium text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.place}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
