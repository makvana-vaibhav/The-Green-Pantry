import { motion } from "framer-motion";
import { Leaf, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[45vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Chef cooking fresh food */}
          <img 
            src="https://pixabay.com/get/ga03f442e651f49a36ce06cbf230660b97fd66eefc39ea0630bfc780e4b142cdf5127da8c508e0e53a845d3a64020dfa790d5745d2d3e6bf63a6ef871d1362a4a_1280.png" 
            alt="Chef cooking" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90"
          >
            Born from a passion for wellness and a love for flavor.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Mission */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-serif font-bold text-accent mb-8">Nourishing Body & Soul</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Green Pantry started with a simple question: Why does healthy food often feel like a compromise?
            We set out to change that narrative. Our kitchen is a sanctuary where fresh, organic ingredients
            are transformed into culinary masterpieces that nourish your body without boring your tastebuds.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Consciously Sourced</h3>
            <p className="text-sm text-muted-foreground">
              We partner directly with local farmers who share our commitment to sustainable, pesticide-free agriculture.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Culinary Excellence</h3>
            <p className="text-sm text-muted-foreground">
              Our recipes are crafted by experienced chefs who understand how to extract maximum flavor from natural ingredients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Community First</h3>
            <p className="text-sm text-muted-foreground">
              We're more than a kitchen; we're a community of wellness enthusiasts dedicated to a healthier lifestyle.
            </p>
          </div>
        </div>

        {/* Closing Image */}
        <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-xl">
          {/* Colorful vegetable spread */}
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80" 
            alt="Fresh ingredients" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
