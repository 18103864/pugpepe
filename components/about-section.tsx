import { Button } from "@/components/ui/button"
import Image from "next/image"
import samurai from '@/public/images/samurai.png'

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-blue-200 to-purple-200 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient gradient-text-primary drop-shadow-lg">
              Who is PugPepe?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 text-gray-700">
              PUGPEPE IS THE COOLEST PUG CHARACTER ON SOLANA. INSPIRED BY THE 
              LEGENDARY MEME CULTURE, NOW TAKING OVER THE SOLANA NETWORK. 
              PUGPEPE IS A SAMURAI, A MOON CHASER, AND THE MOST SUCCESSFUL 
              DEGEN TRADER.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                CHART
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                BUY
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative animate-float">
              <Image
                src={samurai}
                alt="PugPepe Samurai"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Money Background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-floating-money opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        >
          <div className="text-6xl">💰</div>
        </div>
      ))}
    </section>
  )
}

