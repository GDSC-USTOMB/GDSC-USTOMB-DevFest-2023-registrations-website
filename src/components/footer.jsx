import React from 'react'
import Image from 'next/image'
import usto from "../../public/usto.png"
import tayal from "../../public/tayal.png"
import gdsc from "../../public/gdsclogo.png"
const footer = () => {
  return (
    <div className="text-center flex flex-col gap-[30px]">
        <div className="partners">
            <h2 className='lg:text-5xl text-3xl font-semibold'>Event Sponsored By</h2>
            <div className="flex gap-[20px] mt-[20px] justify-center ">
                <Image src={tayal} className=' w-[150px] h-[100px] lg:w-[230px]   lg:h-[180px]'/>
                <Image src={usto} className=' w-[120px] h-[100px] lg:w-[150px]   lg:h-[180px]'/>
            </div>
        </div>
        
        <div className="socials">
            <h2 className='lg:text-5xl text-3xl font-semibold'>Connect With Us!</h2>
            <Image/>
            <Image/>
            <Image/>
            <Image/>

        </div>

        <hr className=' w-[50%] mx-auto bg-[#1B1942]' />

        <Image src={gdsc}  className='mx-auto' alt="gdsc"/>

    </div>
  )
}

export default footer