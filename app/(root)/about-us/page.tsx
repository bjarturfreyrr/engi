"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

const page = () => {
    return (
        <div className="mt-32">
             <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-20 max-w-6xl mx-auto">
                <div>
                    <h1 className="text-3xl text-engi-navy-100 mb-10">Stofan</h1>
                    <p>ENGI er vefþróunarstofa sem sérhæfir sig í að búa til nútímalegar og árangursdrifnar vefsíður fyrir íslensk fyrirtæki. Við sameinum tækniþekkingu og skapandi hugsun til að koma vörumerkinu þínu á framfæri á netinu.</p>
                </div>

                <div className="">
                    <motion.div
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
                            alt="Aboutus"
                            className=""
                        >
                        </Image>
                    </motion.div>
                </div>
             </section>
        </div>
    )
} 

export default page