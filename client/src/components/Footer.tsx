import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import logo from "@assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... imports */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover border border-white/20" />
              The Green Pantry
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Crafting wholesome, vibrant meals from locally sourced ingredients.
              Elevate your daily nutrition with a taste of luxury.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>8200993808</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>thegreenpantry2025@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>104, Krishna Avenue, Rameshvar Park, Radhika Park, Rajkot, Gujarat 360007</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/greennpantry/" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">
              © {new Date().getFullYear()} The Green Pantry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
