import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { NavLink } from "./NavLink";
import { RainbowText } from "./RainbowText";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/raxeraditya", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/k37aditya", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/raxeraditya1",
    label: "LinkedIn",
  },
];

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="hidden lg:flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  isActive={location.pathname === path}
                >
                  <RainbowText
                    text={label}
                    className={`text-sm font-medium ${
                      location.pathname === path
                        ? "opacity-100"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  />
                </NavLink>
              ))}
            </motion.div>

            <div className="flex items-center space-x-4 ml-auto">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        socialLinks={socialLinks}
        currentPath={location.pathname}
      />
    </>
  );
}
