"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--food-red)] to-[var(--food-orange)] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get the App Now
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Order faster, track deliveries in real-time, and unlock exclusive app-only deals. Available on iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-[var(--food-red)] hover:bg-gray-100 rounded-full px-6"
              >
                <Apple className="w-6 h-6 mr-2" />
                App Store
              </Button>
              <Button
                size="lg"
                className="bg-white text-[var(--food-red)] hover:bg-gray-100 rounded-full px-6"
              >
                <Smartphone className="w-6 h-6 mr-2" />
                Google Play
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm opacity-80">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-sm opacity-80">Downloads</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=1000&fit=crop"
                alt="Mobile App Preview"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
