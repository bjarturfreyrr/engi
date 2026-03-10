"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { MoveRight } from "lucide-react"
import { motion } from "motion/react"

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  link?: string
}

const CTA = ({ 
  title = "Ertu með verkefni í huga?", 
  description = "Við viljum heyra frá þér!",
  buttonText = "Hafa samband",
  link = "/contact-us"
}: CTAProps) => {
  return (
    <section className='relative flex items-center justify-center min-h-[400px] lg:h-[600px] bg-gradient-to-b from-engi-blue-500 to-engi-green-500 mt-20 lg:mt-30'>
      <motion.div 
        className='flex justify-center p-6 lg:p-0 lg:ml-[-8%]'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className='flex flex-col gap-6 lg:gap-10 bg-neutral-100 px-6 lg:px-10 py-10 lg:py-20 rounded-2xl lg:rounded-none w-full max-w-md lg:max-w-none'>
          <h1 className='text-engi-navy-100 text-2xl lg:text-4xl'>{title}</h1>
          <p className='text-neutral-600'>{description}</p>

          <Link href={link} className='flex flex-row gap-3 items-center cursor-pointer group'>
            <Button className='bg-transparent text-engi-blue-500 hover:bg-transparent cursor-pointer p-0'>{buttonText}</Button>
            <MoveRight size={15} className='transition-transform text-engi-blue-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-engi-blue-500'/>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
