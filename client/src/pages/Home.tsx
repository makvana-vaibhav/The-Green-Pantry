import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Heart, Clock, Star } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import bowlImage from "@/assets/hero_bowl.png";
import wrapImage from "@/assets/wrap.jpg";
import juiceImage from "@/assets/juice.png";

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
      img: wrapImage,
      link: "/menu?category=Wraps"
    },
    {
      name: "Cold-Pressed Juices",
      desc: "100% natural hydration with zero added sugar.",
      img: juiceImage,
      link: "/menu?category=Drinks"
    },
  ];

  const reviews = [
    {
      text: "The best wraps and salads in Rajkot. Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      author: "Nimisha Unadkat",
      stars: 5
    },
    {
      text: "Very quick and great service… quality of food is really nice and gets prepared fresh when ordered… must try once… really loved the taste..",
      author: "Harnish Mehta",
      stars: 5
    },
    {
      text: "Best quality of Wrap and healthy salads. Food: 5/5 | Service: 5/5",
      author: "Vishal Gosai",
      stars: 5
    },
    {
      text: "Healthy, tasty and affordable salads. Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      author: "Jui Vanzara",
      stars: 5
    },
    {
      text: "New. Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      author: "ARYAN JADAV",
      stars: 5
    },
    {
      text: "Loved how the food is healthy without compromising on taste. The flavors were balanced and not heavy, which is hard to find in regular cloud kitchens! Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      author: "Kinjal Dangar",
      stars: 5
    },
    {
      text: "Tried the wraps and they were really good. Soft, well-filled, and flavorful without feeling oily or heavy. Perfect for a quick but healthy meal.",
      author: "Vaibhav Makvana",
      stars: 5
    },
    {
      text: "The salads was fresh and tasteful. Highly recommended for perfect meal. Food: 5/5",
      author: "Riddhi Goswami",
      stars: 5
    }
  ];

  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start md:items-center justify-center bg-secondary/30 overflow-hidden pt-32 md:pt-0">
        <div className="absolute inset-0 z-0 opacity-10 pattern-dots" />

        <div className="container mx-auto px-6 md:pl-24 md:pr-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-accent leading-[1.1]">
              Healthy eating, <br />
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
              src={bowlImage}
              alt="Fresh Salad Bowl"
              className="w-[500px] h-[500px] object-contain drop-shadow-2xl mix-blend-multiply"
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
            <p className="text-muted-foreground">We believe healthy food doesn’t have to be boring. Every bowl is made with farm-fresh ingredients, packed with nutrition, and crafted to delight your taste buds.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Veg", desc: "Sourced directly from certified organic farms within 50 miles." },
              { icon: Heart, title: "Packed with Love", desc: "Every meal is balanced by certified nutritionists for optimal health." },
              { icon: Clock, title: "Freshly Prepared", desc: "Made to order. No preservatives, ever." }
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

          <div className="relative max-w-2xl mx-auto">
            {/* Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(reviews[reviewIndex].stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed text-lg">{reviews[reviewIndex].text}</p>
                <p className="text-muted-foreground font-medium">— {reviews[reviewIndex].author}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {reviews.length > 1 && (
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  ←
                </motion.button>

                <div className="flex gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setReviewIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === reviewIndex ? "bg-primary w-8" : "bg-muted"
                        }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  →
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
