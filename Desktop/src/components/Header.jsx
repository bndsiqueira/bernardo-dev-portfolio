import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", to: "home" },
    { name: "Sobre Mim", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Projetos", to: "projects" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-sm">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-white">
        <motion.div
          className="text-xl font-bold font-mono bg-gradient-to-r from-yellow-400 via-amber-500 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bernardo.dev
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
