import React from "react";
import { newRegistration } from "@/app/actions/formSender";

export default function form() {
  return (
    <div className=" bg-[#ECECF4]  lg:px-[250px] px-[30px]">
      <form
        className="bg-[#e2e1f3]  shadow-lg rounded-lg"
        action={newRegistration}
      >
        <div className="px-[30px] py-[75px] flex flex-col gap-[5px]">
          <label className="text-xl" htmlfor="fullname">
            Fullname :
          </label>
          <input
            type="text"
            required
            className="ml-[5px] placeholder-[#000000] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="FullName *"
            name="fullname"
            id="fullname"
          />
          <br />
          <label className="text-xl" htmlfor="email">
            Email :
          </label>
          <input
            type="email"
            required
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="Email Adress *"
            name="email"
            id="email"
          />
          <br />
          <label className="text-xl" htmlfor="phone">
            Phone Number :
          </label>
          <input
            type="phone"
            required
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="Phone Number *"
            name="phone"
            id="phone"
          />
          <br />
          <label className="text-xl" htmlfor="univ/comp">
            University / Company :
          </label>
          <input
            type="text"
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="University / Company *"
            name="univ/comp"
            id="univ_comp"
          />
          <br />
          <label className="text-xl" htmlfor="field">
            Field of Study :
          </label>
          <input
            type="text"
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="Field of Study (For Students ) *"
            name="field"
            id="field"
          />
          <br />
          <label className="text-xl" htmlfor="position">
            Position :
          </label>
          <input
            type="text"
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="Position (For Professionals ) *"
            name="position"
            id="position"
          />
          <br />
          <label className="text-xl" htmlfor="questions">
            Questions :
          </label>
          <input
            type="text"
            className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md"
            placeholder="Any specific questions or comments *"
            name="questions"
            id="questions"
          />
          <br />
          <button
            className="font-semibold text-xl h-[50px] w-[250px] mx-auto rounded-lg text-[#fff] bg-[#1B1942]   hover:bg-[#242258] duration-150"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
