import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Our Menu" },
    { href: "/about", label: "Our Story" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-accent tracking-tighter">
            The Green Pantry
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative group py-2">
                <span className={`text-sm font-medium transition-colors ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}>
                  {link.label}
                </span>
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-border"
      >
        <div className="px-4 py-6 space-y-4">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`block text-lg font-serif ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex items-center space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Phone size={20} /></a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
