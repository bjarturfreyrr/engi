
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const websites = [
  {
    title: "Chad Grooming",
    desc: "Netverslun á karlmans rakstursvörum",
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
              hi
            </div>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className='w-full flex flex-col items-center gap-15 py-20 px-30'>
            {websites.map((item, index) => (
              <Link href={item.page} key={index} className='w-full max-w-6xl mx-auto'>
                <div className='flex flex-row gap-15 justify-between px-10'>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={450}
                    height={450}
                    className='rounded-xl'
                  />

                  <div className='flex-1'>
                    <h1 className='text-xl text-engi-navy-100'>{item.title}</h1>
                    <p className='text-3xl text-engi-navy-100'>{item.desc}</p>
                  </div>

                  <div>
                    <Button variant="glass" className='px-6 py-6'>Skoða Verkefni</Button>
                  </div>
                </div>
              </Link>
            ))}
      </section>
    </div>
  )
}

export default page
