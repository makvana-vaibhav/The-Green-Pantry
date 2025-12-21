import { MenuItemCard } from "@/components/MenuItemCard";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-accent py-12 px-4 mb-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-3"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-base"
          >
            Your Daily Dose Of Goodness
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          <AnimatePresence>
            {menuData.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:bg-primary/90 transition-transform active:scale-95">
                View Full Menu
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden bg-background">
              <DialogTitle className="px-6 pt-6">Order Online</DialogTitle>
              <div className="px-6 pb-0">
                <p className="text-muted-foreground text-sm">Choose your preferred platform to access the full menu and order.</p>
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
      </div>
    </div>
  );
}
