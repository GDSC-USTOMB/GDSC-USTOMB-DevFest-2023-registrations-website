'use client'
import React from "react";
import Footer from "./../../components/footer";
import Image from "next/image";
import banner from "../../../public/banner.png";
import { useEffect, useRef } from 'react';


const Success = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Accessing the current property of the ref to get the DOM element
    const banner = bannerRef.current;

    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="text-center">
      
      <Image
      id="banner"
        src={banner}
        className="lg:h-[300px] w-full object-scale-down h-[150px] mx-auto"
        alt="banner"
        ref={bannerRef}
      />
      <div className="my-[50px]  p-[20px] bg-[#e2e1f3]  shadow-md rounded-lg    lg:mx-[250px] mx-[30px]">
        <div className="border-2 border-solid border-[#000000] py-[80px]  ">
          <h1 className="lg:text-5xl text-3xl text-[#1B1942] font-bold">
            Your Registration Has Been Sent!
          </h1>
          <p className="lg:text-3xl text-xl mt-4">Keep an eye on your email.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
