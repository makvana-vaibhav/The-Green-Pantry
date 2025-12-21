import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Phone, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import logo from "@assets/logo.jpg";

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
        {/* ... imports */}

        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-serif text-2xl font-bold text-accent tracking-tighter">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            The Green Pantry
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative group py-2">
                <span className={`text-sm font-medium transition-colors ${location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0">
                  Order Now
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden bg-background">
                <DialogTitle className="px-6 pt-6">Order Online</DialogTitle>
                <div className="px-6 pb-0">
                  <p className="text-muted-foreground text-sm">Choose your preferred platform to order from The Green Pantry.</p>
                </div>

                <div className="p-6 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary/50 transition-colors font-medium text-foreground"
                      onClick={() => window.open('https://www.zomato.com/rajkot/the-green-pantry-150-feet-ring-road', '_blank')}
                    >
                      <span className="text-red-500 font-bold">Zomato</span>
                      <ExternalLink size={16} className="opacity-50" />
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary/50 transition-colors font-medium text-foreground"
                      onClick={() => window.open('https://www.swiggy.com/city/rajkot/the-green-pantry-madhapar-rest1238504', '_blank')}
                    >
                      <span className="text-orange-500 font-bold">Swiggy</span>
                      <ExternalLink size={16} className="opacity-50" />
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4 bg-secondary/50 text-center text-xs text-muted-foreground">
                  Fresh, healthy meals delivered to your door.
                </div>
              </DialogContent>
            </Dialog>
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
              className={`block text-lg font-serif ${location === link.href ? "text-primary" : "text-foreground"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex items-center space-x-6 text-muted-foreground">
            <a href="https://www.instagram.com/greennpantry/" target="_blank" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="tel:8200993808" className="hover:text-primary transition-colors"><Phone size={20} /></a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
