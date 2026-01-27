"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight, Code, Server, Globe } from "lucide-react"
import { motion } from "motion/react"

const services = [
  {
    title: "Vefsíðugerð",
    name: "Viðmótsvænar og fallegar vefsíður",
    description: "Vefsíðugerð af öllum mátum fyrir þitt fyrirtæki, skalanlegar vefsíður með vænt viðmót fyrir allar stærðir og gerðir af skjáum. Við notum nýjustu tækni til að tryggja hraða og öryggi.",
    image: "/undraw_building-websites_k2zp.svg",
    icon: Globe,
    features: ["Skalanlegt viðmót", "SEO hagræðing", "Hröð vefsíða", "Nútímalegt útlit"]
  },
  {
    title: "Vefsíðu hýsing",
    name: "Skilvirkir og hraðir vefir",
    description: "Vefhýsing fyrir þína vefsíðu, við leggjum áherslu á viðhald og hraða á vefsíðunum sem við hýsum. Traust þjónusta með 99.9% uptime tryggingu.",
    image: "/undraw_website_zbig.svg",
    icon: Server,
    features: ["99.9% uptime", "Sjálfvirk öryggisafrit", "SSL vottorð", "Hröð þjónusta"]
  },
  {
    title: "Hugbúnaður",
    name: "Stafrænar lausnir",
    description: "Hafðu samband við okkur ef þú ert með hugbúnað í huga og við skoðum það saman! Við búum til sérsniðnar lausnir sem passa þínum þörfum.",
    image: "/undraw_software-engineer_xv60.svg",
    icon: Code,
    features: ["Sérsniðnar lausnir", "Nútímaleg tækni", "Viðhald innifalið", "Skalanleiki"]
  },
]

const page = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='min-h-[60vh] flex items-center justify-center px-5 mt-20'>
        <div className='w-full max-w-6xl mx-auto'>
          <motion.div 
            className='flex flex-col gap-6 items-center text-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className='text-6xl lg:text-7xl font-bold text-engi-navy-100'>
              Þjónustur <span className='text-engi-blue-500 font-light'>okkar</span>
            </h1>
            <p className='text-gray-600 text-xl max-w-2xl'>
              Við bjóðum upp á fjölbreyttar stafrænar lausnir til að hjálpa fyrirtækinu þínu að vaxa og dafna á netinu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='w-full flex flex-col items-center gap-20 py-20'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='w-full max-w-6xl mx-auto px-5'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-xl bg-engi-blue-500/10'>
                    <service.icon className='w-6 h-6 text-engi-blue-500' />
                  </div>
                  <span className='text-sm text-engi-blue-500 font-medium'>{service.title}</span>
                </div>
                
                <h2 className='text-4xl font-bold text-engi-navy-100'>{service.name}</h2>
                <p className='text-gray-600 text-lg'>{service.description}</p>
                
                <div className='grid grid-cols-2 gap-3 mt-4'>
                  {service.features.map((feature, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <div className='w-2 h-2 rounded-full bg-engi-green-500' />
                      <span className='text-sm text-engi-navy-100'>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact-us" className='flex flex-row gap-3 items-center cursor-pointer group mt-4 w-fit'>
                  <Button className='bg-transparent text-engi-blue-500 hover:bg-transparent cursor-pointer p-0'>Fá tilboð</Button>
                  <MoveRight size={15} className='text-engi-blue-500 transition-all duration-300 group-hover:translate-x-2'/>
                </Link>
              </div>

              {/* Image */}
              <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={service.image}
                    alt={service.title}
                    width={450}
                    height={450}
                    className='w-full max-w-md'
                  />
                </motion.div>
              </div>
            </div>

            {index < services.length - 1 && (
              <div className='mt-20'>
                <Separator />
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
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
