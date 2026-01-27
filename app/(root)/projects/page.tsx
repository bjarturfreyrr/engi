"use client"

import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MoveRight } from "lucide-react"

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
    },
    {
        title: "Fasteignabloggið",
        desc: "Fasteigna fréttamiðill",
        page: "https://fasteignabloggid.is",
        image: "/fast.png",
        proj: "Vefhönnun, viðhald og hýsing"
      },
    {
        title: "ArcticMedia",
        desc: "Markaðsstofa",
        page: "https://arcticmedia.is",
        image: "/arctic.png",
        proj: "Vefhönnun"
      }
  ]

const page = () => {
    return (
        <div className="">
            <section className='min-h-[40vh] lg:min-h-[60vh] flex items-center justify-center px-5 mt-20'>
                <div className='w-full max-w-6xl mx-auto'>
                <motion.div 
                    className='flex flex-col gap-6 items-center text-center'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-engi-navy-100'>
                    Verkin <span className='text-engi-blue-500 font-light'>okkar</span>
                    </h1>
                    <p className='text-gray-600 text-lg lg:text-xl max-w-2xl'>
                    Verkefni sem við höfum unnið náið með okkar viðkiptavinum.
                    </p>
                </motion.div>
                </div>
            </section>

            {/* PROJECTS */}
                <section className='w-full flex flex-col items-center gap-10 lg:gap-15 px-4'>

                        {websites.map((item, index) => (
                        <motion.div
                            key={index}
                            className='w-full max-w-6xl mx-auto px-2 lg:px-5'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={item.page} className='w-full group block' target="_blank" rel="noopener noreferrer">
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

                </section>

                <section className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px] lg:h-[600px] bg-gradient-to-b from-engi-blue-500 to-engi-green-500 mt-20 lg:mt-30'>
            <motion.div 
              className='flex justify-center lg:justify-end p-6 lg:p-0'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className='flex flex-col gap-6 lg:gap-10 bg-neutral-100 px-6 lg:px-10 py-10 lg:py-20 rounded-2xl lg:rounded-none w-full max-w-md lg:max-w-none'>
                <h1 className='text-engi-navy-100 text-2xl lg:text-4xl'>Ertu með verkefni í huga?</h1>
                <p className='text-neutral-600'>Við viljum heyra frá þér!</p>

                <Link href="/contact-us" className='flex flex-row gap-3 items-center cursor-pointer group'>
                      <Button className='bg-transparent text-engi-blue-500 hover:bg-transparent cursor-pointer p-0'>Hafa samband</Button>
                      <MoveRight size={15} className='transition-transform text-engi-blue-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-engi-blue-500'/>
                  </Link>
              </div>
            </motion.div>
            <div className='hidden lg:block'></div>
      </section>
        </div>
    )
} 

export default page
