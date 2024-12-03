import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: '$PUGPEPE - The Coolest Pug on Solana',
  description: 'Join the $PUGPEPE revolution - the most sophisticated meme coin featuring a cool pug with glasses!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

