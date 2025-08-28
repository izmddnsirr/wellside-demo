"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Menu, User, CalendarDays, ArrowRight, Phone, Scissors, Home, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>


      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/10 backdrop-blur backdrop-saturate-200 border-b border-gray-300">

        {/* Navigation Bar */}
        <div className="mx-auto flex h-full items-center justify-between px-6 relative">
          <div className="sm:hidden">
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
                  <SheetTitle className="text-xs font-bold text-gray-600 mx-4 tracking-wide">NAVIGATE</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-5 mx-4">
                  <SheetClose asChild>
                    <a href="#home" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                      <Home size={18} className="text-gray-500" /> Home
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#services" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                      <Scissors size={18} className="text-gray-500" /> Services
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#about" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                      <Info size={18} className="text-gray-500" /> About
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#contact" className="flex items-center gap-3 rounded-xl text-sm font-medium text-gray-600">
                      <Phone size={18} className="text-gray-500" /> Contact
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-widest sm:static sm:translate-x-0">
            wellside.
          </a>
          <NavigationMenu className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
            <NavigationMenuList className="flex gap-6 text-sm font-medium text-gray-600">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className="hover:text-black transition">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="hover:text-black transition">Services</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="hover:text-black transition">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="hover:text-black transition">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto active:scale-95 transition">
            <User size={20} />
          </div>
        </div>

      </header>


      {/* Main */}
      <main className="pt-16" >

        {/* Home */}
        <section id="home" className="py-8 px-4 bg-gray-50 scroll-mt-16 sm:p-20 md:p-15" >
          <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h1 className="font-bold text-3xl md:text-2xl lg:text-4xl">Welcome to <span className="text-gray-700 block">Wellside Barbershop</span></h1>
              <p className="mt-5 text-gray-700 md:text-sm lg:text-xl">Your local grooming spot in Skudai, Johor. Delivering sharp cuts, clean fades, and timeless style.</p>
              <div className="flex gap-2 mt-5">
                <a href="#contact" className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-5 text-base rounded-full border border-black shadow active:scale-95 transition md:py-2.5 md:px-4 md:text-sm lg:py-3 lg:px-5 lg:text-base">
                  <CalendarDays size={18} /> Book Now
                </a>
                <a href="#services" className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-5 text-base rounded-full border border-gray-300 shadow active:scale-95 transition md:py-2.5 md:px-4 md:text-sm lg:py-3 lg:px-5 lg:text-base">
                  Our Services <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div>
              <Carousel plugins={[Autoplay({ delay: 2500, }),]}>
                <CarouselContent className="sm:px-1">
                  {["/images/wellside1.jpg", "/images/wellside1.jpg", "/images/wellside1.jpg", "/images/wellside1.JPG", "/images/wellside1.JPG",].map((src, i) => (
                    <CarouselItem key={i}>
                      <Image className="rounded-2xl border border-gray-300" src={src} width={600} height={400} alt="Wellside Barbershop" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-8 px-4 scroll-mt-16 sm:p-20 md:p-15">
          <h1 className="font-bold text-2xl md:text-3xl sm:text-4xl md:text-center">Our Services</h1>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cuts */}
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow">
              <div className="flex justify-between items-center">
                <h1 className="font-bold lg:text-xl">Cuts</h1>
                <div className="flex text-xs lg:text-sm border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                Expert haircuts for all styles and ages. Look sharp, feel confident, and leave refreshed.
              </p>
            </div>
            {/* Shave */}
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow">
              <div className="flex justify-between items-center">
                <h1 className="font-bold lg:text-xl">Shave</h1>
                <div className="flex text-xs lg:text-sm border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                Enjoy a smooth, relaxing shave with expert care for a fresh, clean, and confident look.
              </p>
            </div>
            {/* Perm */}
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow">
              <div className="flex justify-between items-center">
                <h1 className="font-bold lg:text-xl">Perm</h1>
                <div className="flex text-xs lg:text-sm border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                Transform your look with natural, bouncy curls. Effortless style and volume.
              </p>
            </div>
            {/* Wash */}
            <div className="border border-gray-300 bg-white rounded-2xl p-4 shadow">
              <div className="flex justify-between items-center">
                <h1 className="font-bold lg:text-xl">Wash</h1>
                <div className="flex text-xs lg:text-sm border px-3 py-1 rounded-full items-center justify-center font-bold text-gray-700">
                  RM20++
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                Refresh your hair with a gentle wash, leaving you clean, relaxed, and revitalized.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-8 px-4 bg-gray-50 scroll-mt-16 sm:p-20 md:p-15">
          <h1 className="font-bold text-2xl md:text-3xl sm:text-4xl md:text-center">About Us</h1>
          <div className="mt-5 sm:mt-8 grid gap-8 lg:gap-12 sm:grid-cols-2 lg:items-center">
            <div className="lg:pr-10">
              <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">Wellside Barbershop</h1>
              <p className="italic">Where style meets comfort</p>
              <p className="text-gray-600 mt-2">Founded in 2025</p>
              <p className="mt-4 text-gray-700 lg:text-lg">
                Wellside Barbershop was created with one mission, to provide more than
                just a haircut. We combine modern grooming with a cozy and relaxing
                atmosphere so every client walks out feeling confident and refreshed.
              </p>
            </div>
            <div className="sm:order-none">
              <Image className="rounded-2xl border border-gray-300 shadow sm:mt-0 sm:justify-self-end w-full h-auto sm:h-80 sm:object-cover lg:object-cover lg:rounded-3xl" src="/images/wellside4.jpg" alt="Wellside Barbershop interior" width={600} height={400} />
            </div>
          </div>
          <div className="mt-10 bg-white shadow rounded-2xl p-6 border border-gray-300 sm:max-w-3xl sm:mx-auto lg:max-w-4xl">
            <h2 className="font-semibold text-lg mb-4 sm:text-xl lg:text-2xl">What Our Clients Say</h2>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="italic text-gray-700 lg:text-lg">
                The best barbershop experience I&apos;ve ever had. Friendly barbers,
                stylish cuts, and a super comfortable vibe. Definitely my go-to place
                from now on!
              </p>
              <p className="mt-2 font-medium text-gray-900">— Izamuddin, Regular Client</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8 px-4 bg-white scroll-mt-16 sm:p-20 md:p-15">
          <h1 className="font-bold text-2xl mb-5 md:text-3xl sm:text-4xl md:text-center">Contact</h1>
          <div className="sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12 sm:items-start">
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
                      <tr><td>Monday</td><td>12:00 PM - 10:00 PM</td></tr>
                      <tr><td>Tuesday</td><td>12:00 PM - 10:00 PM</td></tr>
                      <tr><td>Wednesday</td><td>12:00 PM - 10:00 PM</td></tr>
                      <tr><td>Thursday</td><td>Close</td></tr>
                      <tr><td>Friday</td><td>03:00 PM - 10:00 PM</td></tr>
                      <tr><td>Saturday</td><td>12:00 PM - 10:00 PM</td></tr>
                      <tr><td>Sunday</td><td>12:00 PM - 10:00 PM</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">WhatsApp Us:</h1>
                <a href="https://wa.me/601112564440" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 border border-green-300 p-3 rounded-2xl shadow bg-green-500 text-white transition active:scale-95">
                  <FaWhatsapp size={20} />WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 sm:h-113">
              <h1 className="font-semibold">Our Location:</h1>
              <div className="mt-2 rounded-2xl overflow-hidden border border-gray-300 shadow-sm h-64 sm:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.41741365997!2d103.594!3d1.537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6dff59b0xxxx%3A0x123456789!2s24%20Jalan%20Palas%205%2C%20Taman%20Teratai%2C%2081300%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1695200000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main >


      {/* Footer */}
      < footer className="bg-gray-100 text-center p-4 text-sm text-gray-500" >
        © 2025 Wellside.All rights reserved.
      </ footer >


    </div >
  );
}
