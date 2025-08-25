"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Menu, User, CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/10 backdrop-blur backdrop-saturate-200 border-b border-white/20">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
          <Menu size={20} />
          <h1 className="text-xl font-bold">WELLSIDE</h1>
          <User size={20} />
        </div>
      </header>

      {/* Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="book" className="py-12 px-4 bg-gray-50">
          {/* Title and Description */}
          <h1 className="font-bold text-3xl">Welcome to <span className="text-gray-700 block">Wellside Barbershop</span></h1>
          <p className="mt-5 text-gray-700">Your local grooming spot in Skudai, Johor. Delivering sharp cuts, clean fades, and timeless style.</p>

          {/* Button */}
          <div className="flex gap-2 mt-5">
            <a href="#book" className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-5 rounded-full border shadow-sm">
              <CalendarDays size={20} />
              Book Now
            </a>
            <a href="#services" className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-5 rounded-full border border-gray-300 shadow-sm">
              Our Services
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Carousel */}
          <div>
            <Carousel plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            >
              <CarouselContent>
                {[
                  "/images/wellside1.jpg",
                  "/images/wellside1.jpg",
                  "/images/wellside1.jpg",
                  "/images/wellside1.JPG",
                  "/images/wellside1.JPG",
                ].map((src, i) => (
                  <CarouselItem key={i}>
                    <Image
                      className="mt-7 rounded-2xl border border-gray-200"
                      src={src}
                      width={600}
                      height={400}
                      alt="Wellside Barbershop"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 px-4">
          <h1 className="font-bold text-2xl">Our Services</h1>

          {/* Cuts */}
          <div className="mt-5">
            <div className="border border-gray-200 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Cuts</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="text-sm text-gray-600">Fresh cut</p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm">
                View More
              </button>
            </div>
          </div>

          {/* Shave */}
          <div className="mt-5">
            <div className="border border-gray-200 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Shave</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="text-sm text-gray-600">Fresh cut</p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm">
                View More
              </button>
            </div>
          </div>

          {/* Perm */}
          <div className="mt-5">
            <div className="border border-gray-200 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Perm</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="text-sm text-gray-600">Fresh cut</p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm">
                View More
              </button>
            </div>
          </div>

          {/* Wash */}
          <div className="mt-5">
            <div className="border border-gray-200 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Wash</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="text-sm text-gray-600">Fresh cut</p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm">
                View More
              </button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12 px-4 bg-gray-50">
          <h1 className="font-bold text-2xl">
            About Us
          </h1>
        </section>

        {/* Contact */}
        <section className="py-12 px-6 bg-white text-center">Contact</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © 2025 Wellside. All rights reserved.
      </footer>
    </div >
  );
}
