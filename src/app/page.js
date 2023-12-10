import Image from "next/image";
import Form from "../components/form";
import Footer from "../components/footer";
import { Trykker } from "next/font/google";
import banner from "../../public/banner.png";
import bracket1 from "../../public/bracket1.png";
import bracket2 from "../../public/bracket2.png";
import Swal from 'sweetalert2'

export default function Home() {
  return (
    <div className=" h-screen ">
      <div className="banner">
      <Image
        src={banner}
        className="lg:h-[300px] w-full object-scale-down h-[150px] mx-auto"
        alt="banner"
      />
      </div>
    
    
      <br />
      <div className="lg:px-[150px]">
        <div className="flex justify-center lg:gap-[80px] gap-[20px] ">
          <Image
            className="w-[75px] h-[75px]  lg:w-[200px] lg:h-[200px] "
            src={bracket1}
            alt="bracket1"
          />
          <div className="">
            <p className="text-center lg:text-[26px]">
              Welcome to <span className="font-bold ">DevFest Oran 2023</span>.
              <br />
              Hosted by <span className="font-bold ">GDSC USTO!</span>
            </p>
            <div className="flex gap-[20px] lg:mt-[30px] mt-[10px]  text-center justify-center   ">
              <p className="lg:text-[24px] font-semibold  bg-[#D9D9D9] lg:w-[200px] px-[20px] rounded-lg text-center">
                16 Dec 2023
              </p>
              <p className="lg:text-[24px] font-semibold  bg-[#D9D9D9] lg:w-[200px] px-[20px] rounded-lg text-center">
                9:30 AM
              </p>
            </div>
          </div>

          <Image
            className="w-[75px] h-[75px] lg:w-[200px] lg:h-[200px] "
            src={bracket2}
            alt="bracket2"
          />
        </div>

        <p className="lg:text-[22px] px-[10px] mt-[20px] text-center">
          We are excited to bring together tech enthusiasts, students, and
          professionals for a series of engaging talks and online workshops.
          Please fill out the following registration form to secure your spot at
          this exciting event.
        </p>
        
      </div>
      <br />
      <br />
      <h1 className='text-center  lg:text-4xl font-bold text-[#fff] relative top-[50px] z-[50]  lg:w-[400px] w-[200px]  py-[30px] rounded-lg mx-auto bg-[#1B1942]'>Registration Form</h1>
      <Form />
      <br />
      <br />
      <Footer />
    </div>
  );
}

