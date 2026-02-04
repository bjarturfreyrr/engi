"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'
import Services from "@/components/Services"
import CTA from "@/components/CTA"
import { motion } from "motion/react"

const websites = [
  {
    title: "Chad Grooming",
    desc: "Netverslun",
    page: "https://chadgrooming.is",
    image: "/chadgrooming2.png",
    proj: "Vefhönnun, viðhald og hýsing"
  },
  {
    title: "Thor Travel",
    desc: "Ferðaþjónusta",
    page: "https://thortravel.is",
    image: "/thor.png",
    proj: "Viðhald og hýsing"
  },
  {
    title: "K R Law",
    desc: "Lögfræðistofa",
    page: "https://iplaw.is",
    image: "/krlaw.png",
    proj: "Vefhönnun, viðhald og hýsing"
  }
]

const page = () => {
  return (
    <div className='w-full'>
      <section className='min-h-screen flex items-center justify-center px-5 lg:px-30 mt-20'>
        <div className='w-full max-w-full mx-auto'>
          <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-32'>
            <motion.div 
              className='flex flex-col gap-8 lg:gap-14 text-center lg:text-left'
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Stafrænar lausnir <span className='text-blue-500 font-light'>fyrir þitt fyrirtæki</span></h1>
              <p className='text-gray-600 text-lg lg:text-xl'>Við sjáum um vefþróun, vefsíðugerð og umsjón. </p>
              <Button className='mt-4 w-[200px] h-[50px] mx-auto lg:mx-0' variant='glass'>Skoða meira</Button>
            </motion.div>
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
                  className="w-full max-w-[300px] lg:max-w-[500px]"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className='w-full flex flex-col items-center gap-10 lg:gap-15 px-4'>
          <motion.div 
            className='flex flex-col gap-5 items-center justify-center text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl lg:text-6xl text-engi-navy-100'>Verkin okkar</h1>
            <p className='text-neutral-600 mb-7'>Vefsíður unnar af okkar teymi</p>
          </motion.div>

            {websites.map((item, index) => (
              <motion.div
                key={index}
                className='w-full max-w-6xl mx-auto px-2 lg:px-5'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.page} className='w-full group block' target="_blank">
                  <div className='relative rounded-2xl overflow-hidden mx-2 lg:mx-10 p-4 transition-all duration-300 ease-out hover:bg-neutral-50 hover:shadow-lg hover:shadow-neutral-200/50 hover:-translate-y-1'>
                    <div className='flex flex-col md:flex-row gap-6 lg:gap-15 justify-between relative'>
                      <Image 
                        src={item.image}
                        alt={item.title}
                        width={450}
                        height={450} 
                        className='rounded-xl w-full md:w-auto md:max-w-[300px] lg:max-w-[450px]'
                      />

                      <div className='flex-1 flex flex-col'>
                        <h1 className='text-lg lg:text-xl text-engi-navy-100'>{item.title}</h1>
                        <p className='text-xl lg:text-3xl text-engi-navy-100'>{item.desc}</p>
                        <div className="text-sm text-engi-blue-500 mt-auto pt-4">
                          {item.proj}
                        </div>
                      </div>

                      <div className='hidden md:block'>
                        <Button variant="default" className='px-6 py-6 bg-0 text-engi-navy-100 hover:text-engi-navy-100 hover:bg-0 cursor-pointer p-0'>Skoða Verk</Button>
                      </div>
                    </div>
                  </div>
                  <div className='px-2 lg:px-10 mt-5'>
                    <Separator />
                  </div>
                </Link>
              </motion.div>
            ))}

            <motion.div 
              className="w-full max-w-6xl mx-auto px-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mx-2 lg:mx-10 flex justify-center md:justify-end">
                <Link href="/projects">
                <Button className='mt-4 w-[200px] h-[50px]' variant='glass'>Skoða öll verk</Button>
                </Link>
              </div>
            </motion.div>
      </section>

      <Services />

      <CTA />
    </div>
  )
}

export default page
