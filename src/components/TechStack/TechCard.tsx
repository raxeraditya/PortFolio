import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
  image: string;
  category: string;
  index: number;
}

export function TechCard({ name, image, category, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
        </div>
      </div>
    </motion.div>
  );
}