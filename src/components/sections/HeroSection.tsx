"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920')] opacity-5 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Delicious Food,
              <span className="text-[var(--food-red)] block mt-2">Delivered Fast</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
              Experience the best food delivery service connecting you with thousands of restaurants, fresh meals, and happy moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[var(--food-red)] hover:bg-[var(--food-red)]/90 text-white text-lg px-8 py-6 rounded-full">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[var(--food-red)] text-[var(--food-red)] hover:bg-[var(--food-red)] hover:text-white text-lg px-8 py-6 rounded-full">
                Become a Partner
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2d6b88bd-b325-4cc0-b039-971d7df618ef/generated_images/modern-food-delivery-hero-image-featurin-c84d6348-20251130060123.jpg"
              alt="Delicious Food"
              fill
              className="object-contain rounded-3xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
