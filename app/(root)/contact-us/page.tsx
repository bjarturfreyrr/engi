"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Netfang",
    value: "eingi@eingi.is"
  },
  {
    icon: Phone,
    label: "Sími",
    value: "+354 782 1508"
  },
  {
    icon: MapPin,
    label: "Staðsetning",
    value: "Kópavogur, Ísland"
  }
]

const page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-5 mt-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-engi-navy-100">
            Hafa samband
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
            Segðu okkur frá verkefninu þínu og við munum hafa samband við þig.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 pb-32">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-engi-navy-100">Nafn</label>
                    <Input 
                      type="text" 
                      placeholder="Nafnið þitt"
                      className="h-12 border-neutral-200 focus:border-engi-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-engi-navy-100">Netfang</label>
                    <Input 
                      type="email" 
                      placeholder="Netfangið þitt"
                      className="h-12 border-neutral-200 focus:border-engi-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-engi-navy-100">Efni</label>
                  <Input 
                    type="text" 
                    placeholder="Hvað getum við gert fyrir þig?"
                    className="h-12 border-neutral-200 focus:border-engi-blue-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-engi-navy-100">Skilaboð</label>
                  <Textarea 
                    placeholder="Segðu okkur meira um verkefnið þitt..."
                    className="min-h-[150px] border-neutral-200 focus:border-engi-blue-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="h-12 bg-engi-blue-500 hover:bg-engi-blue-500/90 text-white mt-2 cursor-pointer"
                >
                  Senda skilaboð
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col gap-8 lg:pl-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-engi-navy-100 mb-2">Tengiliðaupplýsingar</h2>
                <p className="text-gray-600">Ekki hika við að hafa samband.</p>
              </div>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-engi-blue-500/10">
                      <item.icon className="w-5 h-5 text-engi-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-engi-navy-100">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-6 bg-neutral-50 rounded-2xl">
                <h3 className="font-semibold text-engi-navy-100 mb-2">Svartími</h3>
                <p className="text-gray-600 text-sm">
                  Við svörum öllum fyrirspurnum innan 24 klukkustunda á virkum dögum.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default page
