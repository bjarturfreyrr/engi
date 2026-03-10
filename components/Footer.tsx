import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { Instagram, Facebook, Mail, MoveRight } from "lucide-react"

const Footer = () => {
    return (
        <div className='flex flex-col gap-10 lg:gap-20 p-6 lg:p-20 max-w-7xl mx-auto w-full'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between'>
                <Image
                    src="/moar.svg"
                    width={160}
                    height={160}
                    className="w-[120px] lg:w-[160px]"
                    alt="Logo"
                />

                <div className='grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-20'>
                    <div className='flex flex-col gap-4 lg:gap-5'>
                        <p className='text-gray-500 text-sm'>Valmynd</p>
                        <Link href="/about-us" className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Stofan</Link>
                        <Link href="/services" className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Þjónusta</Link>
                        <Link href="/projects" className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Verkin</Link>
                        <Link href="/contact-us" className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Fá tilboð</Link>
                    </div>

                    <div className='flex flex-col gap-4 lg:gap-5'>
                        <p className='text-gray-500 text-sm'>Hafa Samband</p>
                        <p className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>moar@móar.is</p>
                    </div>

                    <div className='flex flex-col gap-4 lg:gap-5 col-span-2 lg:col-span-1'>
                        <p className='text-gray-500 text-sm'>Skilmálar og lögræðilegt</p>
                        <p className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Skilmálar</p>
                        <p className='text-engi-navy-100 text-base lg:text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Stillingar á vefrakökum</p>
                    </div>
                </div>
            </div>

            <Separator />

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center'>
                <div className='flex flex-row gap-5 text-engi-navy-100'>
                    <Instagram className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200' />
                    <Facebook className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200'/>
                    <Mail className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200'/>
                </div>

                <Button asChild className='border-none bg-transparent text-engi-navy-100 hover:bg-transparent cursor-pointer p-0 h-auto'>
                    <Link href="/contact-us" className='flex flex-row items-center gap-2 cursor-pointer group'>
                        Hafa samband
                        <MoveRight size={15} className='transition-transform transition-all duration-300 group-hover:translate-x-2'/>
                    </Link>
                </Button>

            </div>
        </div>
    )
}

export default Footer
