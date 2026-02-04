"use client"

import Image from 'next/image'
import { motion } from "motion/react"
import { Target, Users, Zap } from "lucide-react"
import CTA from "@/components/CTA"

const values = [
  {
    icon: Target,
    title: "Árangur",
    description: "Við skiptum okkur af niðurstöðum"
  },
  {
    icon: Users,
    title: "Samstarf",
    description: "Við vinnum náið með viðskiptavinum"
  },
  {
    icon: Zap,
    title: "Nýsköpun",
    description: "Við notum nýjustu tækni"
  }
]

const page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-5 mt-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-engi-navy-100">
                Stofan
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                ENGI er vefþróunarstofa sem sérhæfir sig í að búa til nútímalegar og árangursdrifnar vefsíður fyrir íslensk fyrirtæki.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Við sameinum tækniþekkingu og skapandi hugsun til að koma vörumerkinu þínu á framfæri á netinu.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
              }}
            >
              <Image
                src="/undraw_scrum-board_7bgh.svg"
                width={400}
                height={400}
                alt="Um okkur"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-5">
          <motion.h2 
            className="text-3xl font-bold text-engi-navy-100 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gildi okkar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <value.icon className="w-6 h-6 text-engi-blue-500" />
                <h3 className="text-lg font-semibold text-engi-navy-100">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Ertu með verkefni í huga?"
        description="Við viljum heyra frá þér."
      />
    </div>
  )
} 

export default page
