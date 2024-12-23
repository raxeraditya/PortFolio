import { motion } from 'framer-motion';

interface RainbowTextProps {
  text: string;
  className?: string;
}

export function RainbowText({ text, className = '' }: RainbowTextProps) {
  return (
    <motion.span 
      className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
        hover:from-blue-500 hover:via-green-500 hover:to-yellow-500 transition-all duration-500 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.span>
  );
}