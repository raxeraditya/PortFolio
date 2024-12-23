import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Twitter } from 'lucide-react';
import { NavLink } from './NavLink';
import { RainbowText } from './RainbowText';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ path: string; label: string }>;
  socialLinks: Array<{ icon: any; href: string; label: string }>;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, socialLinks, currentPath }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 lg:hidden flex flex-col"
          >
            <div className="p-4 flex justify-end border-b dark:border-gray-800">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col space-y-2 px-4 mb-8">
                {navLinks.map(({ path, label }) => (
                  <NavLink key={path} to={path} isActive={currentPath === path} onClick={onClose}>
                    <RainbowText
                      text={label}
                      className={`text-lg font-medium ${
                        currentPath === path
                          ? 'opacity-100'
                          : 'opacity-80 hover:opacity-100'
                      }`}
                    />
                  </NavLink>
                ))}
              </div>
              
              <div className="border-t dark:border-gray-800 pt-4 px-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex items-center space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}