'use client'

import { useState } from 'react'
import { AboutSection } from "@/components/about-section"
import { HowToBuySection } from "@/components/how-to-buy-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { MemesSection } from "@/components/memes-section"
import { SocialsSection } from "@/components/socials-section"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { RiTelegram2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { IconType } from 'react-icons'

import dogpepe from '@/public/images/dogpepe.jpg'

const socialIcons: { [key: string]: { url: string, icon: IconType, label: string } } = {
  telegram: { url: "https://t.me/pugpepe", icon: RiTelegram2Line, label: "Telegram" },
  twitter: { url: "https://twitter.com/pugpepe", icon: BsTwitterX, label: "X" },
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-4xl font-bold text-gradient gradient-text-primary">
              $PUGPEPE
            </Link>
            
            <div className="hidden md:flex items-center gap-6 font-medium">
              <Link href="#about" className="text-gray-700 hover:text-gray-900 transition">ABOUT</Link>
              <Link href="#how-to-buy" className="text-gray-700 hover:text-gray-900 transition">HOW TO BUY?</Link>
              <Link href="#roadmap" className="text-gray-700 hover:text-gray-900 transition">ROADMAP</Link>
              <Link href="#memes" className="text-gray-700 hover:text-gray-900 transition">MEMES</Link>
              <Link href="#social" className="text-gray-700 hover:text-gray-900 transition">SOCIAL</Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2">
                {Object.entries(socialIcons).map(([platform, { url, icon: Icon, label }]) => (
                  <Link
                    key={platform}
                    href={url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </Link>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all"
              >
                BUY $PUGPEPE
              </Button>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <RiCloseLine className="w-6 h-6" />
                ) : (
                  <RiMenu3Line className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="#about" className="text-lg text-gray-700 hover:text-gray-900 transition">ABOUT</Link>
              <Link href="#how-to-buy" className="text-lg text-gray-700 hover:text-gray-900 transition">HOW TO BUY?</Link>
              <Link href="#roadmap" className="text-lg text-gray-700 hover:text-gray-900 transition">ROADMAP</Link>
              <Link href="#memes" className="text-lg text-gray-700 hover:text-gray-900 transition">MEMES</Link>
              <Link href="#social" className="text-lg text-gray-700 hover:text-gray-900 transition">SOCIAL</Link>
              <div className="flex items-center gap-2">
                {Object.entries(socialIcons).map(([platform, { url, icon: Icon, label }]) => (
                  <Link
                    key={platform}
                    href={url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </Link>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all"
              >
                BUY $PUGPEPE
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-0 pb-15 min-h-screen relative flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gradient gradient-text-primary mb-6 sm:mb-10 drop-shadow-lg leading-tight">
              INTRODUCING
            </h1>
            <div className="relative w-full max-w-[50rem] h-64 sm:h-80 md:h-96 mb-6 sm:mb-8">
              <Image
                src={dogpepe}
                alt="PugPepe Logo"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-lg"
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient gradient-text-secondary tracking-wider drop-shadow-lg mt-6 sm:mt-10">
              THE COOLEST PUG ON SOLANA
            </h2>
          </div>
        </div>

        {/* Floating Money */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-floating-money"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="text-4xl">💰</div>
          </div>
        ))}
      </section>

      <AboutSection />
      <HowToBuySection />
      <RoadmapSection />
      <MemesSection />
      <SocialsSection />
    </main>
  )
}

