import Image from "next/image";
import Form from "../components/form"
import Footer from "../components/footer"
import { Trykker } from "next/font/google";
import banner from "../../public/banner.png";
import bracket1 from "../../public/bracket1.png";
import bracket2 from "../../public/bracket2.png";

export default function Home() {
  
  return (
    <div className=" h-screen ">
      <Image
        src={banner}
        className=" w-screen lg:h-[300px] h-[150px] object-cover"
      />
      <br />
      <div className="lg:px-[250px]">
        <div className="flex justify-evenly">
          <Image className="w-[75px] h-[75px] lg:w-[200px] lg:h-[200px] " src={bracket1} />
          <div>
             <p className="text-center lg:text-[31px]">
            Welcome to <span className="font-bold ">DevFest Oran 2023</span>.
            <br />
            Hosted by <span className="font-bold ">GDSC USTO!</span>
          </p>
          <div className="flex gap-[20px] lg:mt-[30px] mt-[10px]  text-center justify-center   ">
            <p className="lg:text-[32px] font-semibold  bg-[#D9D9D9] lg:px-[80px] px-[20px] rounded-lg text-center">
              16 Dec 2023
            </p>
            <p className="lg:text-[32px] font-semibold  bg-[#D9D9D9] lg:px-[80px] px-[20px] rounded-lg text-center">
              9:30 AM
            </p>
          </div>
          </div>
         
          <Image className="w-[75px] h-[75px] lg:w-[200px] lg:h-[200px] " src={bracket2} />
        </div>

        <p className="lg:text-[27px] px-[10px] mt-[20px] text-center">
          We are excited to bring together tech enthusiasts, students, and
          professionals for a series of engaging talks and online workshops.
          Please fill out the following registration form to secure your spot at
          this exciting event.
        </p>
      </div>
      <br/>
      <br/>
      <Form/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}
