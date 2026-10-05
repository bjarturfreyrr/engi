import { Space_Grotesk } from "next/font/google"
import "./ny.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-ny",
})

export default function NyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={`ny ${spaceGrotesk.variable}`}>{children}</div>
}
