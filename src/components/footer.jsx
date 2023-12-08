import React from 'react'
import Image from 'next/image'
import usto from "../../public/usto.png"
import tayal from "../../public/tayal.png"
import gdsc from "../../public/gdsclogo.png"
import facebook from "../../public/facebook.png"
import x from "../../public/x.png"

import instagram from "../../public/instagram.png"

import linkedin from "../../public/linkedin.png"




const footer = () => {
  return (
    <div className="text-center flex flex-col gap-[30px]">
        <div className="partners">
            <h2 className='lg:text-5xl text-3xl font-semibold'>Event Sponsored By</h2>
            <div className="flex gap-[20px] mt-[20px] justify-center ">
                <Image alt="tayal" src={tayal} className=' w-[150px] h-[100px] lg:w-[230px]   lg:h-[180px]'/>
                <Image alt="usto" src={usto} className=' w-[100px] h-[100px] lg:w-[150px]   lg:h-[150px]'/>
            </div>
        </div>
        
        <div className="socials">
            <h2 className='lg:text-5xl text-3xl font-semibold'>Connect With Us!</h2>
            <div className="flex justify-center gap-[30px] text-7xl mt-[30px] ">
            <a href="https://www.facebook.com/GDSCUSTOMB" ><Image src={facebook} width={70} height={70}/></a>
            <a href="https://twitter.com/GDSCUSTOMB"><Image src={x} width={110} height={110}/></a>
            <a href="https://www.instagram.com/gdsc_usto_mb/ "><Image src={instagram} width={70} height={70}/></a>
            <a href="https://www.linkedin.com/company/gdscusto/"><Image src={linkedin} width={70} height={70}/></a>

            </div>
           

        </div>

        <hr className=' w-[50%] mx-auto bg-[#1B1942]' />

        <Image src={gdsc}   className='mx-auto' alt="gdsc"/>

    </div>
  )
}

export default footer