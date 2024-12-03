import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

export function RoadmapSection() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      items: [
        "Token Launch on Solana",
        "Community Growth to 10,000 members",
        "Meme Contest",
        "CoinGecko & CoinMarketCap Listings"
      ]
    },
    {
      phase: "Phase 2",
      title: "Expansion & Partnerships",
      items: [
        "Major Exchange Listing",
        "PugPepe NFT Collection",
        "Partnerships with Solana Projects",
        "Charity Initiative for Pug Rescue"
      ]
    },
    {
      phase: "Phase 3",
      title: "Utility & Governance",
      items: [
        "PugPepe DAO Formation",
        "Staking and Yield Farming",
        "Mobile Wallet App",
        "Real-world Adoption Campaign"
      ]
    }
  ]

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-amber-200 to-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient gradient-text-primary">PugPepe Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
              <CardHeader className="bg-gradient-to-b from-amber-100 to-white">
                <CardTitle className="text-3xl font-bold text-gradient gradient-text-primary">{milestone.phase}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

