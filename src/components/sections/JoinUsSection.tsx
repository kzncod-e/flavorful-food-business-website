"use client";

import { motion } from "framer-motion";
import { Store, Bike, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const joinOptions = [
  {
    icon: Store,
    title: "Restaurant Partner",
    description: "Expand your reach and grow your business with our platform",
    benefits: ["Access to millions of customers", "Marketing support", "Real-time analytics"],
    cta: "Become a Partner",
  },
  {
    icon: Bike,
    title: "Delivery Courier",
    description: "Earn flexible income delivering food on your schedule",
    benefits: ["Flexible working hours", "Competitive earnings", "Weekly payments"],
    cta: "Join as Courier",
  },
  {
    icon: Briefcase,
    title: "Join Our Team",
    description: "Build your career with a fast-growing food tech company",
    benefits: ["Competitive salary", "Growth opportunities", "Great work culture"],
    cta: "View Careers",
  },
];

export default function JoinUsSection() {
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
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow with us and be part of the food revolution
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {joinOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--food-red)] text-white flex items-center justify-center mb-6">
                <option.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6">{option.description}</p>
              
              <ul className="space-y-3 mb-8">
                {option.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[var(--food-red)] mr-2">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-[var(--food-red)] hover:bg-[var(--food-red)]/90 text-white rounded-full">
                {option.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
