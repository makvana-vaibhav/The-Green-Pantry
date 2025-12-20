import { type MenuItem } from "@shared/schema";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { MessageCircle, ExternalLink, Leaf } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for WhatsApp ordering
  const getWhatsappUrl = () => {
    const text = `Hi The Green Pantry, I'd like to order ${item.name}.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary/30">
            <Leaf size={48} />
          </div>
        )}
        {!item.available && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="font-medium text-primary">
            ₹{item.price}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 h-10">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button 
              disabled={!item.available}
              className="w-full py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              Order Now
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden bg-background">
            <div className="p-6 pb-0">
              <h3 className="font-serif text-2xl font-semibold mb-2">How would you like to order?</h3>
              <p className="text-muted-foreground">Choose your preferred platform to get your {item.name}.</p>
            </div>
            
            <div className="p-6 space-y-3">
              <a 
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors font-semibold shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </a>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary/50 transition-colors font-medium text-foreground"
                  onClick={() => window.open('https://zomato.com', '_blank')}
                >
                  <span className="text-red-500 font-bold">Zomato</span>
                  <ExternalLink size={16} className="opacity-50" />
                </button>
                <button 
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary/50 transition-colors font-medium text-foreground"
                  onClick={() => window.open('https://swiggy.com', '_blank')}
                >
                  <span className="text-orange-500 font-bold">Swiggy</span>
                  <ExternalLink size={16} className="opacity-50" />
                </button>
              </div>
            </div>
            <div className="px-6 py-4 bg-secondary/50 text-center text-xs text-muted-foreground">
              Usually delivered within 45 minutes
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
