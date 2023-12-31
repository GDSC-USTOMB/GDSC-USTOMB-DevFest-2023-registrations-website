import React from "react";
import Image from "next/image";
import usto from "../../public/usto.png";
import tayal from "../../public/tayal.png";
import gdsc from "../../public/gdsclogo.png";
import facebook from "../../public/facebook.png";
import x from "../../public/x.png";

import instagram from "../../public/instagram.png";

import linkedin from "../../public/linkedin.png";

const footer = () => {
  return (
    <div className="text-center flex flex-col gap-[30px]">
      

      <div className="socials">
        <h2 className="lg:text-5xl text-3xl mx- font-semibold">
          Connect With Us!
        </h2>
        <div className="flex justify-center gap-[30px] text-7xl mt-[30px] sm:mx-[30px]">
          <a href="https://www.facebook.com/GDSCUSTOMB">
            <Image src={facebook} width={50} height={50} alt="facebook" />
          </a>
          <a href="https://twitter.com/GDSCUSTOMB">
            <Image src={x} width={80} height={90} alt="x" />
          </a>
          <a href="https://www.instagram.com/gdsc_usto_mb/ ">
            <Image src={instagram} width={50} height={50} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/gdscusto/">
            <Image src={linkedin} width={50} height={50} alt="linkedin" />
          </a>
        </div>
      </div>

      <hr className=" w-[50%] mx-auto bg-[#1B1942]" />

      <Image src={gdsc} className="mx-auto" alt="gdsc" />
    </div>
  );
};

export default footer;
