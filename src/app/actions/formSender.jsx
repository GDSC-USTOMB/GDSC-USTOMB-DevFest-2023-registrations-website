import mongoose from "mongoose";
import Registration from "../../models/User";
import { redirect } from "next/navigation";

import Form from "../../components/form";
import Success from "../../components/success";
export async function newRegistration(data) {
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
    let newRegistration = new Registration({
      fullname,
      email,
      phone,
      univ_comp,
      field,
      position,
      questions,
    });
    await newRegistration.save();
    console.log(newRegistration);
    redirect(`/success/`);
  } catch (error) {
    redirect(`/success/`);
  }
}
