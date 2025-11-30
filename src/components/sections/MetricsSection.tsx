"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { value: 5000000, label: "Happy Customers", suffix: "M+" },
  { value: 250, label: "Cities Covered", suffix: "+" },
  { value: 50000, label: "Restaurant Partners", suffix: "K+" },
  { value: 100000, label: "Active Couriers", suffix: "K+" },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function MetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--food-red)] to-[var(--food-orange)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Impact & Scale
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Serving millions with excellence every single day
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold mb-2">
                <AnimatedCounter end={metric.value} />
                {metric.suffix}
              </div>
              <p className="text-lg opacity-90">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
