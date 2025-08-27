"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Menu, User, CalendarDays, ArrowRight, Phone, Scissors, Home, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/10 backdrop-blur backdrop-saturate-200">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">

          {/* Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="active:scale-95 transition" aria-label="Open menu">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="py-3.5 border-b">
                <h1 className="mx-4 font-bold tracking-wider">wellside.</h1>
              </div>
              <SheetHeader>
                <SheetTitle className="text-xs text-bold text-gray-600 mx-4 tracking-wide">NAVIGATE</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5 mx-4">
                <SheetClose asChild>
                  <a href="#home" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                    <Home size={18} className="text-gray-500" />
                    Home
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#services" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                    <Scissors size={18} className="text-gray-500" />
                    Services
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#about" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                    <Info size={18} className="text-gray-500" />
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                    <Phone size={18} className="text-gray-500" />
                    Contact
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Title */}
          <a href="#home" className="text-xl font-bold tracking-widest">wellside.</a>

          {/* User Icon */}
          <div className="active:scale-95 transition">
            <User size={20} />
          </div>

        </div>
      </header >

      {/* Content */}
      < main className="pt-16" >
        {/* Hero Section */}
        < section id="home" className="py-8 px-4 bg-gray-50 scroll-mt-16" >
          < h1 className="font-bold text-3xl" > Welcome to < span className="text-gray-700 block" > Wellside Barbershop</ span></h1 >
          <p className="mt-5 text-gray-700">Your local grooming spot in Skudai, Johor. Delivering sharp cuts, clean fades, and timeless style.</p>

          {/* Button */}
          <div className="flex gap-2 mt-5">
            <a href="#contact" className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-5 rounded-full border border-black shadow active:scale-95 transition">
              <CalendarDays size={18} />
              Book Now
            </a>
            <a href="#services" className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-5 rounded-full border border-gray-300 shadow active:scale-95 transition">
              Our Services
              <ArrowRight size={18} />
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
                      className="mt-7 rounded-2xl border border-gray-300"
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
        </section >

        {/* Services */}
        < section id="services" className="py-8 px-4 scroll-mt-16" >
          <h1 className="font-bold text-2xl">Our Services</h1>

          {/* Cuts */}
          <div className="mt-5 ">
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Cuts</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Expert haircuts for all styles and ages. Look sharp, feel confident, and leave refreshed.
              </p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm active:scale-95 transition">
                Book
              </button>
            </div>
          </div>

          {/* Shave */}
          <div className="mt-5">
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Shave</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Enjoy a smooth, relaxing shave with expert care for a fresh, clean, and confident look.
              </p>
              <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm active:scale-95 transition">
                Book
              </button>
            </div>
          </div>

          {/* Perm */}
          <div className="mt-5">
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Perm</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Transform your look with natural, bouncy curls. Effortless style and volume.
              </p>
              {/* <button className="mt-4 bg-gray-700 text-white py-2 mx-auto w-full rounded-lg items-center justify-center text-sm">
                Coming Soon
              </button> */}
            </div>
          </div>

          {/* Wash */}
          <div className="mt-5">
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Wash</h1>
                <div className="flex text-xs border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Refresh your hair with a gentle wash, leaving you clean, relaxed, and revitalized.
              </p>
              {/* <button className="mt-4 bg-gray-900 text-white py-2 mx-auto w-full rounded-md items-center justify-center text-sm active:scale-95 transition">
                Book
              </button> */}
            </div>
          </div>
        </ section>

        {/* About */}
        <section id="about" className="py-8 px-4 bg-gray-50 scroll-mt-16" >
          <h1 className="font-bold text-2xl">
            About Us
          </h1>
          <div className="mt-5">
            <h1 className="text-xl font-semibold">Wellside Barbershop</h1>
            <p className="italic">Where style meets comfort</p>
            <p className="text-gray-600 mt-2">Founded in 2025</p>
            <Image className="mt-4 rounded-2xl border border-gray-300 shadow" src="/images/wellside4.jpg" alt="Wellside Barbershop interior" width={600} height={400} />
            <p className="mt-4 text-gray-700">
              Wellside Barbershop was created with one mission, to provide more than
              just a haircut. We combine modern grooming with a cozy and relaxing
              atmosphere so every client walks out feeling confident and refreshed.
            </p>
          </div>

          {/* Mockup Review */}
          <div className="mt-10 bg-white shadow rounded-2xl p-6 border border-gray-300">
            <h2 className="font-semibold text-lg mb-4">What Our Clients Say</h2>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="italic text-gray-700">
                The best barbershop experience Ive ever had. Friendly barbers,
                stylish cuts, and a super comfortable vibe. Definitely my go-to place
                from now on!
              </p>
              <p className="mt-2 font-medium text-gray-900">— Izamuddin, Regular Client</p>
            </div>
          </div>
        </ section>

        {/* Contact */}
        <section id="contact" className="py-8 px-4 bg-white scroll-mt-16" >
          <h1 className="font-bold text-2xl mb-5">Contact</h1>

          <div className="text-gray-700 space-y-5">
            <div>
              <h1 className="font-semibold">Address:</h1>
              <p className="mt-2 border border-gray-300 p-3 rounded-2xl shadow">
                24 Jalan Palas 5<br />
                Taman Teratai<br />
                81300 Skudai Johor
              </p>
            </div>

            <div>
              <h1 className="font-semibold">Opening Hours:</h1>
              <div className="mt-2 border border-gray-300 p-4 rounded-2xl shadow">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="">Monday</td>
                      <td>12:00 PM - 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="">Tuesday</td>
                      <td>12:00 PM - 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="">Wednesday</td>
                      <td>12:00 PM - 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="">Thursday</td>
                      <td>Close</td>
                    </tr>
                    <tr>
                      <td className="">Friday</td>
                      <td>03:00 PM - 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="">Saturday</td>
                      <td>12:00 PM - 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="">Sunday</td>
                      <td>12:00 PM - 10:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="font-semibold">WhatsApp Us:</h1>
              <a
                href="https://wa.me/601112564440"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 border border-green-300 p-3 rounded-2xl shadow bg-green-500 text-white transition active:scale-95"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </div>

            <div>
              <h1 className="font-semibold">Our Location:</h1>
              <div className="mt-2 rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.41741365997!2d103.594!3d1.537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6dff59b0xxxx%3A0x123456789!2s24%20Jalan%20Palas%205%2C%20Taman%20Teratai%2C%2081300%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1695200000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </ section>
      </main >

      {/* Footer */}
      < footer className="bg-gray-100 text-center p-4 text-sm text-gray-500" >
        © 2025 Wellside.All rights reserved.
      </ footer >
    </div >
  );
}
