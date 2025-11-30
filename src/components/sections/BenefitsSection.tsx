"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Gift, Percent, Clock, Shield, DollarSign, TrendingUp, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefitsCategories = [
  {
    title: "For Customers",
    benefits: [
      { icon: Gift, title: "Rewards Program", description: "Earn points on every order and get exclusive rewards" },
      { icon: Percent, title: "Special Discounts", description: "Access member-only deals and promotions daily" },
      { icon: Clock, title: "Priority Delivery", description: "Get your food faster with premium membership" },
      { icon: Shield, title: "Order Protection", description: "100% money-back guarantee on every order" },
    ],
  },
  {
    title: "For Restaurant Partners",
    benefits: [
      { icon: TrendingUp, title: "Grow Your Business", description: "Reach millions of hungry customers nationwide" },
      { icon: DollarSign, title: "Transparent Pricing", description: "Fair commission rates with no hidden fees" },
      { icon: Zap, title: "Marketing Support", description: "Featured listings and promotional campaigns" },
      { icon: Shield, title: "Payment Security", description: "Fast and secure payment processing" },
    ],
  },
  {
    title: "For Couriers",
    benefits: [
      { icon: DollarSign, title: "Competitive Pay", description: "Earn up to $25/hour during peak times" },
      { icon: Clock, title: "Flexible Schedule", description: "Work when you want, where you want" },
      { icon: Heart, title: "Health Benefits", description: "Access to insurance and wellness programs" },
      { icon: Gift, title: "Bonus Incentives", description: "Weekly and monthly performance bonuses" },
    ],
  },
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? benefitsCategories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === benefitsCategories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everyone wins with our platform
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <h3 className="text-3xl font-bold text-gray-900">
              {benefitsCategories[activeIndex].title}
            </h3>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {benefitsCategories[activeIndex].benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--food-orange)] text-white flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {benefitsCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-[var(--food-red)] w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
