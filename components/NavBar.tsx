"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { useState } from "react"

const Items = [
    {
        name: "Stofan",
        href: "/about-us"
    },
    {
        name: "Þjónusta",
        href: "/services"
    },
    {
        name: "Verkin",
        href: "/projects"
    },
    {
        name: "Hafa Samband",
        href: "/contact-us"
    },
]


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex lg:grid lg:grid-cols-3 fixed z-[60] top-0 left-0 right-0 items-center justify-between h-[80px] lg:h-[100px] px-5 lg:px-10 py-5 bg-white/20 backdrop-blur-md'>
          <div className='justify-self-start items-center align-center lg:ml-10 text-2xl text-white font-bold'>
              <Link href="/">
                  <Image
                  src="/moar.svg"
                  width={140}
                  height={140}
                  className="w-[120px] lg:w-[160px]"
                  alt="Logo"
                  />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex justify-self-center flex-row gap-10 text-engi-navy-100'>
              
                  {Items.slice(0, 3).map((item) => (
                      <Link 
                          className="cursor-pointer relative after:absolute after:-bottom-[8px] after:left-1/2 after:h-[1px] after:w-0 after:bg-green-500 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full" 
                          href={item.href} 
                          key={item.name}>
                          {item.name}
                      </Link>
                  ))}
              <Separator orientation="vertical"/>
              {Items.slice(3).map((item) => (
                  <Link 
                      key={item.name} 
                      href={item.href}>
                      {item.name}
                  </Link>
              ))}
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex justify-self-end flex-row items-center gap-5'>
              <Link href="/contact-us">
                <Button className="w-[200px] h-[50px]" variant="glass">Fá tilboð</Button>
              </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className='lg:hidden p-2 text-engi-navy-100'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ScrollProgress className="top-[80px] lg:top-[100px]" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed inset-0 top-[80px] z-50 bg-white/95 backdrop-blur-md lg:hidden'>
          <div className='flex flex-col items-center gap-8 pt-10'>
            {Items.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className='text-xl text-engi-navy-100'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              <Button className="w-[200px] h-[50px] mt-4" variant="glass">Fá tilboð</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
