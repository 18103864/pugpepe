import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-400 to-amber-300 relative overflow-hidden p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-20">
          <div className="lg:w-1/2">
            <Image
              src="/samurai.png"
              alt="PugPepe Samurai"
              width={600}
              height={600}
              className="animate-float"
            />
          </div>
          
          <div className="lg:w-1/2 text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 drop-shadow-lg" style={{
              textShadow: "3px 3px 0px rgba(0,0,0,0.1)"
            }}>
              Who is PugPepe?
            </h1>
            
            <p className="text-2xl md:text-3xl leading-relaxed mb-12 font-medium" style={{
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }}>
              PUGPEPE IS THE COOLEST PUG CHARACTER ON SOLANA. INSPIRED BY THE 
              LEGENDARY MEME CULTURE, NOW TAKING OVER THE SOLANA NETWORK. 
              PUGPEPE IS A SAMURAI, A MOON CHASER, AND THE MOST SUCCESSFUL 
              DEGEN TRADER.
            </p>
            
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-100 text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105"
              >
                CHART
              </Button>
              <Button 
                size="lg"
                className="bg-amber-600 text-white hover:bg-amber-700 text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105"
              >
                BUY
              </Button>
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
    </main>
  )
}

