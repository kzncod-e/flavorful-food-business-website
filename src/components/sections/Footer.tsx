"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  company: {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Press & Media", "Blog"],
  },
  products: {
    title: "Products",
    links: ["Food Delivery", "Catering", "Pre-Order", "Grocery", "Business Solutions"],
  },
  partners: {
    title: "Partners",
    links: ["Become a Partner", "Restaurant Portal", "Courier Hub", "Partner Support"],
  },
  support: {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQ", "Safety", "Accessibility"],
  },
  legal: {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Protection"],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--food-red)] flex items-center justify-center text-2xl">
                🍔
              </div>
              <span className="text-2xl font-bold">FoodHub</span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--food-red)] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--food-red)] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--food-red)] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--food-red)] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--food-red)] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-8">
            <p>© 2024 FoodHub. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
