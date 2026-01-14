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
    <div className='my-60'>
        {/* Þjonustur */}

      <section className='w-full mt-44'>
        <div className='flex flex-row gap-40 max-w-4xl mx-auto'>
          <div className='flex-1 max-w-md'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-10'>
                    {services.map((service, index) => (
                        <h1
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`cursor-pointer ${activeTab === index ? 'text-engi-blue-500 text-sm' : 'text-gray-500 text-sm'}`}
                        >
                            {service.title}
                        </h1>
                    ))}
                </div>

                <Separator />

                <h1 className='text-engi-navy-100 text-4xl mt-10 font-bold'>{services[activeTab].name}</h1>
              
                <p className='mt-5'>{services[activeTab].description}</p>

            </div>
          </div>
          <div className='flex-1'>
            <Link href="/">
              <Image 
                src={services[activeTab].image}
                width={400}
                height={400}
                alt='Photo'
                className=''
              
              ></Image>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services