"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Separator } from "@/components/ui/separator"

const Services = () => {
    const [activeTab, setActiveTab] = useState(0)

    const services = [
        {
            title: "Vefsíðugerð",
            name: "Viðmótsvænar og fallegar vefsíður",
            description: "Vefsíðugerð af öllum mátum fyrir þitt fyrirtæki, skalanlegar vefsíður með vænt viðmót fyrir allar stærðir og gerðir af skjáum",
            image: "/undraw_building-websites_k2zp.svg",
        },
        {
            title: "Vefsíðu hýsing",
            name: "Skilvirkir og hraðir vefir",
            description: "Vefhýsing fyrir þína vefsíðu, við leggjum áherslu á viðhald og hraða á vefsíðunum sem við hýsum",
            image: "/undraw_website_zbig.svg",
        },
        {
            title: "Hugbúnað",
            name: "Stafrænar lausnir",
            description: "Hafðu samband við okkur ef þú ert með hugbúnað í huga og við skoðum það saman!",
            image: "/undraw_software-engineer_xv60.svg",
        },
    ]


  return (
    <div className='my-20 lg:my-60 min-h-[400px] lg:h-[300px]'>
        {/* Þjonustur */}

      <section className='w-full mt-10 lg:mt-44 px-5'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-40 max-w-4xl mx-auto'>
          <div className='flex-1 max-w-md'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-4 lg:gap-10 flex-wrap'>
                    {services.map((service, index) => (
                        <h1
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`cursor-pointer text-xs lg:text-sm ${activeTab === index ? 'text-engi-blue-500' : 'text-gray-500'}`}
                        >
                            {service.title}
                        </h1>
                    ))}
                </div>

                <Separator />

                <h1 className='text-engi-navy-100 text-2xl lg:text-4xl mt-6 lg:mt-10 font-bold'>{services[activeTab].name}</h1>
              
                <p className='mt-3 lg:mt-5 text-gray-600'>{services[activeTab].description}</p>

            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Link href="/services">
              <Image 
                src={services[activeTab].image}
                width={400}
                height={400}
                alt='Photo'
                className='w-full max-w-[280px] lg:max-w-[400px]'
              
              ></Image>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
