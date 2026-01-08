
import React from 'react'
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div className='w-full'>
      <section className='min-h-screen flex items-center justify-center px-4'>
        <div className='w-full max-w-8xl mx-auto'>
          <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 lg:p-32'>
            <div className='flex flex-col gap-14 text-center lg:text-left'>
              <h1 className='text-8xl font-bold'>Heildrænar Hugbúnaðarlausnir <span className='text-blue-500 font-light'>fyrir þitt fyrirtæki</span></h1>
              <p className='text-gray-600 text-xl'>Lausnir fyrir fyritækið þitt á almannavægi</p>
              <Button className='mt-4 w-[200px] h-[50px] rounded-full bg-blue-500 text-white hover:bg-blue-600' variant='default'>Skoða meira</Button>
            </div>
            <div className='flex items-center justify-center'>
              hi
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
