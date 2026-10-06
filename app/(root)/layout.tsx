import { Geist, Geist_Mono, Inter } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
