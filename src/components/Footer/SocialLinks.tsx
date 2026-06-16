import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    image: "/tech/github-icon.svg",
    href: "https://github.com/raxeraditya/",
  },
  {
    name: "LinkedIn",
    image: "/tech/linkedin-app-icon.svg",
    href: "https://www.linkedin.com/in/dreadaditya/",
  },
  {
    name: "Twitter",
    image: "/tech/twitter-color-icon.svg",
    href: "https://x.com/raxeraditya",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-6">
      {socialLinks.map(({ name, image, href }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform"
        >
          <img src={image} alt={name} className="w-8 h-8" />
        </motion.a>
      ))}
    </div>
  );
}
