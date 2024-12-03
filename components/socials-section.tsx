import React from 'react';
import { Button } from "@/components/ui/button"
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Line } from "react-icons/ri";

export const SocialsSection: React.FC = () => {
  const socials = [
    { name: "X", icon: BsTwitterX, url: "https://twitter.com/pugpepe", color: "from-blue-400 to-blue-600" },
    { name: "Telegram", icon: RiTelegram2Line, url: "https://t.me/pugpepe", color: "from-blue-300 to-blue-500" },
  ]

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-amber-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient gradient-text-primary">Join the PugPepe Community</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <div key={social.name} className="relative group">
                <div className={`absolute inset-0.5 bg-gradient-to-r ${social.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
                <div className="relative bg-white rounded-lg p-6 flex flex-col items-center justify-center">
                  <Icon className="w-16 h-16 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-gradient gradient-text-secondary w-full flex justify-center">{social.name}</h3>
                  <Button asChild className={`bg-gradient-to-r ${social.color} text-white hover:opacity-90`}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Join Now
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

