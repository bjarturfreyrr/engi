"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from "lucide-react"
import Services from "@/components/Services"
import { motion } from "motion/react"



const websites = [
  {
    title: "Chad Grooming",
    desc: "Netverslun fyrir karlmans rakstursvörum",
    page: "/",
    image: "/chadgrooming2.png",
  },
  {
    title: "Kr Law",
    desc: "Lögfræðistofa",
    page: "/",
    image: "/krlaw.png",
  },
  {
    title: "Arctic Media",
    desc: "Markaðsstofa",
    page: "/",
    image: "/arctic.png",
  }
]

const page = () => {
  return (
    <div className='w-full'>
      <section className='min-h-screen flex items-center justify-center px-30 mt-20'>
        <div className='w-full max-w-full mx-auto'>
          <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 lg:p-32'>
            <div className='flex flex-col gap-14 text-center lg:text-left'>
              <h1 className='text-8xl font-bold'>Stafrænar lausnir <span className='text-blue-500 font-light'>fyrir þitt fyrirtæki</span></h1>
              <p className='text-gray-600 text-xl'>Við sjáum um vefþróun, vefsíðugerð og umsjón. </p>
              <Button className='mt-4 w-[200px] h-[50px]' variant='glass'>Skoða meira</Button>
            </div>
            <div className='flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                }}
              >
                <Link href="/">
                  <Image src="/undraw_web-development_f0tp.svg"
                  alt="Image"
                  height={500}
                  width={500}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className='w-full flex flex-col items-center gap-15'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-6xl text-engi-navy-100'>Verkin okkar</h1>
            <p className='text-neutral-600 mb-7'>Vefsíður unnar af okkar teymi</p>
          </div>

            {websites.map((item, index) => (
              <Link href={item.page} key={index} className='w-full max-w-6xl mx-auto group px-5'>
                <div className='relative rounded-lg overflow-hidden mx-10'>
                  <div className='absolute inset-0 bg-gradient-to-b from-engi-green-100 to-engi-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none' />
                  <div className='flex flex-row gap-15 justify-between relative py-4'>
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={450}
                      height={450} className='rounded-xl'
                    />

                    <div className='flex-1'>
                      <h1 className='text-xl text-engi-navy-100'>{item.title}</h1>
                      <p className='text-3xl text-engi-navy-100'>{item.desc}</p>
                    </div>

                    <div>
                      <Button variant="default" className='px-6 py-6 bg-0 text-engi-navy-100 hover:text-engi-navy-100'>Skoða Verkefni</Button>
                    </div>
                  </div>
                </div>
                <div className='px-10 mt-5'>
                  <Separator />
                </div>
              </Link>
            ))}
      </section>

      <Services />

      

      <section className='grid grid-cols-2 items-center h-[600px] bg-gradient-to-b from-engi-blue-500 to-engi-green-500 mt-30'>
            <div className='flex justify-end'>
              <div className='flex flex-col gap-10 bg-neutral-100 px-10 py-20'>
                <h1 className='text-engi-navy-100 text-4xl'>Ertu með verkefni í huga?</h1>
                <p className='text-neutral-600'>Við viljum heyra frá þér!</p>

                <Link href="/" className='flex flex-row gap-3 items-center cursor-pointer group'>
                      <Button className='bg-transparent text-engi-blue-500 hover:bg-transparent cursor-pointer p-0'>Hafa samband</Button>
                      <MoveRight size={15} className='transition-transform text-engi-blue-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-engi-blue-500'/>
                  </Link>
              </div>
            </div>
            <div></div>
      </section>
    </div>
  )
}

export default page
