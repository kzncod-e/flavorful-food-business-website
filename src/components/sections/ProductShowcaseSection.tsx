"use client";

import { motion } from "framer-motion";
import { Pizza, Coffee, IceCream, Salad, Sandwich, Soup, Apple, Cookie } from "lucide-react";

const products = [
  { icon: Pizza, name: "Pizza", description: "Hot & Fresh" },
  { icon: Coffee, name: "Beverages", description: "Hot & Cold" },
  { icon: IceCream, name: "Desserts", description: "Sweet Treats" },
  { icon: Salad, name: "Healthy", description: "Fresh & Light" },
  { icon: Sandwich, name: "Fast Food", description: "Quick Bites" },
  { icon: Soup, name: "Comfort Food", description: "Warm & Cozy" },
  { icon: Apple, name: "Fruits", description: "Fresh Daily" },
  { icon: Cookie, name: "Bakery", description: "Fresh Baked" },
];

export default function ProductShowcaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From comfort food to healthy options, we've got it all
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <product.icon className="w-10 h-10 text-[var(--food-red)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
