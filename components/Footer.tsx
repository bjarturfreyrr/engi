import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { Instagram, Facebook, Mail, MoveRight } from "lucide-react"

const Footer = () => {
    return (
        <div className='flex flex-col gap-20 p-20 max-w-7xl mx-auto w-full'>
            <div className='flex flex-row justify-between'>
                <Image
                    src="/svg/multi-navy.svg"
                    width={160}
                    height={160}
                    className=""
                    alt="Logo"
                />

                <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-gray-500 text-sm'>Valmynd</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Stofan</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Þjónusta</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Verkin</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Fá tilboð</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <p className='text-gray-500 text-sm'>Hafa Samband</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>engi@engi.is</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <p className='text-gray-500 text-sm'>Skilmálar og lögræðilegt</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Skilmálar</p>
                        <p className='text-engi-navy-100 text-lg cursor-pointer hover:text-engi-blue-500 transition-all duration-200'>Stillingar á vefrakökum</p>
                    </div>
                </div>
            </div>

            <Separator />

            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-5 text-engi-navy-100'>
                    <Instagram className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200' />
                    <Facebook className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200'/>
                    <Mail className='cursor-pointer hover:text-engi-blue-500 transition-all duration-200'/>
                </div>

                <Link href="/" className='flex flex-row items-center cursor-pointer group'>
                    <Button className='border-none bg-white-500 text-engi-navy-100 hover:bg-white-500 cursor-pointer'>Hafa samband</Button>
                    <MoveRight size={15} className='transition-transform transition-all duration-300 group-hover:translate-x-2'/>
                </Link>

            </div>
        </div>
    )
}

export default Footer