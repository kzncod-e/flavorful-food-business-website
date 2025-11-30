"use client";

import { motion } from "framer-motion";
import { Utensils, ChefHat, ShoppingBag, Calendar, Building2, Handshake } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Food Delivery",
    description: "Order from thousands of restaurants near you",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: ChefHat,
    title: "Catering Packages",
    description: "Perfect meals for events and gatherings",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Calendar,
    title: "Pre-Order Meals",
    description: "Schedule your meals in advance",
    color: "from-yellow-500 to-green-500",
  },
  {
    icon: ShoppingBag,
    title: "Grocery Delivery",
    description: "Fresh ingredients delivered to your door",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Building2,
    title: "Business Solutions",
    description: "Corporate meal plans and office catering",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Handshake,
    title: "Merchant Partnership",
    description: "Grow your restaurant with our platform",
    color: "from-blue-500 to-purple-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for delicious food experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
