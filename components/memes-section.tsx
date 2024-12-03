import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function MemesSection() {
  const memes = [
    { src: "/meme1.jpg", alt: "PugPepe Meme 1" },
    { src: "/meme2.jpg", alt: "PugPepe Meme 2" },
    { src: "/meme3.jpg", alt: "PugPepe Meme 3" },
    { src: "/meme4.jpg", alt: "PugPepe Meme 4" },
  ]

  return (
    <section id="memes" className="py-20 bg-gradient-to-br from-amber-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient gradient-text-primary">PugPepe Memes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memes.map((meme, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src={meme.src}
                  alt={meme.alt}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

