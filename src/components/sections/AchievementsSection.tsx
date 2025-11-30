"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Users, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Food Delivery 2024",
    description: "Awarded by Food Industry Excellence",
  },
  {
    icon: Award,
    title: "Customer Favorite",
    description: "Top-rated app with 4.8★ reviews",
  },
  {
    icon: Star,
    title: "Quality Excellence",
    description: "Certified fresh & safe food standards",
  },
  {
    icon: Users,
    title: "Community Choice",
    description: "Trusted by millions nationwide",
  },
  {
    icon: TrendingUp,
    title: "Fastest Growing",
    description: "200% growth in restaurant partnerships",
  },
];

export default function AchievementsSection() {
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
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for excellence in food delivery and customer satisfaction
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition-shadow bg-gradient-to-br from-red-50 to-orange-50"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--food-red)] text-white flex items-center justify-center mb-4">
                <achievement.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
