"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[var(--food-red)] flex items-center justify-center text-2xl">
              🍔
            </div>
            <span className="text-2xl font-bold text-gray-900">FoodHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
              Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
              Products
            </Link>
            <Link href="/join-us" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
              Join Us
            </Link>
            <Link href="/benefits" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
              Benefits
            </Link>
            <Link href="/download" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
              Download
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-[var(--food-red)] hover:bg-[var(--food-red)]/90 text-white rounded-full">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/services" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
                Services
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
                Products
              </Link>
              <Link href="/join-us" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
                Join Us
              </Link>
              <Link href="/benefits" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
                Benefits
              </Link>
              <Link href="/download" className="text-gray-700 hover:text-[var(--food-red)] transition-colors font-medium">
                Download
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full bg-[var(--food-red)] hover:bg-[var(--food-red)]/90 text-white rounded-full">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}