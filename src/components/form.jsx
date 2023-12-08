import React from 'react'
import mongoose from "mongoose";
import Swal from 'sweetalert2'
import Registration from "../models/User";
const form = () => {



    async function newRegistration(data) {
        "use server";
        let fullname = data.get("fullname").valueOf();
        let email = data.get("email").valueOf();
        let phone = data.get("phone").valueOf();
        let univ_comp = data.get("univ/comp").valueOf();
        let field = data.get("field").valueOf();
        let position = data.get("position").valueOf();
        let questions = data.get("questions").valueOf();
        try {
          await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          let newRegistration = new Registration({ fullname, email, phone, univ_comp, field, position, questions });
          await newRegistration.save();
          console.log(newRegistration);
          sucessMessage();
          
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className=" relative bg-[#ECECF4]  lg:px-[250px] px-[30px]">
        <form className='bg-[#e2e1f3]  shadow-lg rounded-lg' action={newRegistration}>
        <div className="px-[30px] py-[75px] flex flex-col gap-[5px]">
       <label className='text-xl' for="fullname">Fullname :</label>
        <input type="text" className="ml-[5px] placeholder-[#000000] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="FullName *" name="fullname" id="fullname" /><br/>
        <label className='text-xl' for="email">Email :</label>
        <input type="email" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="Email Adress *" name="email" id="email" /><br/>
        <label className='text-xl' for="phone">Phone Number :</label>
        <input type="phone" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="Phone Number *" name="phone" id="phone" /><br/>
        <label className='text-xl' for="univ/comp">University / Company :</label>
        <input type="text" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="University / Company *" name="univ/comp" id="univ_comp" /><br/>
        <label className='text-xl' for="field">Field of Study :</label>
        <input type="text" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="Field of Study (For Students ) *" name="field" id="field" /><br/>
        <label className='text-xl' for="position">Position :</label>
        <input type="text" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="Position (For Professionals ) *" name="position" id="position" /><br/>
        <label className='text-xl' for="questions">Questions :</label>
        <input type="text" className="placeholder-[#000000] ml-[5px] border-[#07313F] border-2 w-full h-[60px] pl-[15px] rounded-md" placeholder="Any specific questions or comments *" name="questions" id="questions" /><br/>
        <button   className="font-semibold text-xl h-[50px] w-[250px] mx-auto rounded-lg text-[#fff] bg-[#1B1942]   hover:bg-[#242258] duration-150" type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default form