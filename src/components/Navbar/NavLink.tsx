import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ to, isActive, children, onClick }: NavLinkProps) {
  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        className="relative px-3 py-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
            layoutId="navbar-underline"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.div>
    </Link>
  );
}