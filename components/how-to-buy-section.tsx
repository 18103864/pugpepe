import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRightLeft, Coins } from 'lucide-react'

export function HowToBuySection() {
  const steps = [
    {
      title: "Create a Wallet",
      description: "Download a Solana wallet like Phantom or Solflare and add some SOL.",
      icon: Wallet
    },
    {
      title: "Connect to DEX",
      description: "Visit Jupiter or Raydium and connect your Solana wallet.",
      icon: ArrowRightLeft
    },
    {
      title: "Swap for $PUGPEPE",
      description: "Use your SOL to swap for $PUGPEPE tokens and join the pug revolution!",
      icon: Coins
    }
  ]

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-br from-amber-300 to-amber-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient gradient-text-primary">How to Buy $PUGPEPE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="gradient-card-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-amber-800">
                  <step.icon className="w-8 h-8" />
                  <span>Step {index + 1}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-gradient gradient-text-secondary">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

