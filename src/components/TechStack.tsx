import { motion } from 'framer-motion';

const technologies = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'Django', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Linux', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
];

export function TechStack() {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Technologies & Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto px-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="font-medium text-gray-800 dark:text-white">{tech.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}