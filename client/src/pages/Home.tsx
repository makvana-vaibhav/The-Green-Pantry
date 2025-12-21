import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, Clock, Star } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const categories = [
    { 
      name: "Fresh Salads", 
      desc: "Crunchy, colorful, and packed with nutrients.", 
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      link: "/menu?category=Salads"
    },
    { 
      name: "Wholesome Wraps", 
      desc: "Perfectly balanced meals in a convenient hold.", 
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
      link: "/menu?category=Wraps"
    },
    { 
      name: "Cold-Pressed Juices", 
      desc: "100% natural hydration with zero added sugar.", 
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80",
      link: "/menu?category=Drinks"
    },
  ];

  const reviews = [
    {
      text: "The quality of ingredients is outstanding. Every salad tastes fresh and vibrant. The Green Pantry has become my go-to for healthy meals.",
      author: "Priya Sharma",
      stars: 5
    },
    {
      text: "Finally, a place that understands clean eating. The wraps are delicious and actually filling. No compromise on taste or health.",
      author: "Rahul Mehta",
      stars: 5
    },
    {
      text: "Their cold-pressed juices are incredible. You can taste the freshness in every sip. Perfect for my morning routine.",
      author: "Ananya Desai",
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pattern-dots" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-accent leading-[1.1]">
              Healthy eating, <br/>
              <span className="italic text-primary">crafted daily.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Experience the luxury of fresh, organic ingredients delivered straight to your door. Nutrition has never tasted this good.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all">
                View Menu <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-96 h-96 flex items-center justify-center"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=80" 
              alt="Fresh Salad Bowl" 
              className="w-80 h-80 object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Why The Green Pantry?</h2>
            <p className="text-muted-foreground">We believe food should be your medicine, but taste like a treat.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Organic", desc: "Sourced directly from certified organic farms within 50 miles." },
              { icon: Heart, title: "Nutrition First", desc: "Every meal is balanced by certified nutritionists for optimal health." },
              { icon: Clock, title: "Freshly Prepared", desc: "Made to order. No preservatives, no frozen ingredients, ever." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/30 text-center hover:bg-secondary/60 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background text-primary mb-6 shadow-sm">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-accent mb-2">Curated Categories</h2>
              <p className="text-muted-foreground">Explore our chef's selection.</p>
            </div>
            <Link href="/menu" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              View Full Menu <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.link}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-accent mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground">{cat.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/menu" className="inline-flex items-center gap-2 text-primary font-medium">
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Join thousands of happy customers enjoying The Green Pantry.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed">{review.text}</p>
                <p className="text-muted-foreground font-medium">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
