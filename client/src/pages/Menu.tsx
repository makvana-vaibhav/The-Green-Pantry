import { useMenu } from "@/hooks/use-menu";
import { MenuItemCard } from "@/components/MenuItemCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Loader2, Search } from "lucide-react";

const CATEGORIES = ["All", "Salads", "Wraps", "Drinks"];

export default function MenuPage() {
  const { data: menuItems, isLoading, error } = useMenu();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!menuItems) return [];
    
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-destructive">
        <p>Failed to load menu. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-accent py-20 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Menu</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Seasonally inspired, locally sourced, and crafted for your well-being.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Bar */}
        <div className="sticky top-24 z-30 bg-background/95 backdrop-blur-xl py-4 mb-0 border-b border-border/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Categories Scroll */}
            <div className="overflow-x-auto pb-2 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                      ${activeCategory === category 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"}
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 text-primary hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
