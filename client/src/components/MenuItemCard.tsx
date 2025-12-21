import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { MessageCircle, ExternalLink, Leaf } from "lucide-react";
import type { MenuItem } from "@/data/menu";

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
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-40 overflow-hidden bg-secondary">
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

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {item.name}
        </h3>
        
        <p className="text-muted-foreground text-xs line-clamp-2 mb-3 flex-1">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-[9px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <span className="font-serif text-2xl font-bold text-accent">
            ₹{item.price}
          </span>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button 
              disabled={!item.available}
              className="w-full mt-3 py-2 rounded-lg font-semibold text-sm bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              Order
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden bg-background">
            <DialogTitle className="px-6 pt-6">How would you like to order?</DialogTitle>
            <div className="px-6 pb-0">
              <p className="text-muted-foreground text-sm">Choose your preferred platform to get your {item.name}.</p>
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
