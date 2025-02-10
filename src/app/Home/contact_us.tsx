"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import img1 from "../../../public/img1.jpeg";
interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-black text-white min-h-screen   xl:px-32 lg:px-8 px-5">
      <div className=" w-full">
        <section className="flex flex-col md:flex-row justify-between items-center bg-black p-6">
          <div className="md:w-1/2  flex flex-col md:items-baseline items-center md:pb-0 pb-5">
            <h3 className="text-yellow-400 font-bold text-2xl">
              ⭐ Let’s Grab a Coffee
            </h3>
            <h2 className="text-5xl font-bold mt-4 mb-4 md:text-start text-center">
              SCHEDULE YOUR NEXT <br /> APPOINTMENT WITH{" "}
              <span className="text-red-600">ME.</span>
            </h2>
            <button className="mt-4 w-48 bg-red-600 px-6 py-2 text-white font-semibold  hover:bg-red-700">
              Book Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <Image
              src={img1}
              alt="Tattoo Artist"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black text-white mt-12 p-6 flex lg:flex-row flex-col items-center">
          <div className="w-full lg:w-3/5 flex flex-col md:items-baseline items-center">
            <h3 className="text-yellow-400 font-bold text-2xl">
              ⭐ Contact Me
            </h3>
            <h2 className="text-5xl font-bold mt-4 md:text-start text-center ">
              LET’S TALK ABOUT YOUR NEXT INK{" "}
              <span className="text-red-600">IDEAS.</span>
            </h2>
            <div className="mt-6 flex items-center gap-2">
              <span>
                <FaPhoneAlt className="text-white w-4 h-4" />
              </span>{" "}
              Call Me: 555-555-5555
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span>
                <MdEmail className="text-white w-4 h-4" />
              </span>{" "}
              Email Me: shiv@jasoberoi.ca
            </div>
            <div className="mt-4 flex items-center gap-2 ">
              <span>
                <FaLocationDot className="text-white w-4 h-4" />
              </span>
              #306-1493, foster street, WhiteRock BC Candada
            </div>
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 w-full lg:w-3/5"
          >
            <input
              {...register("firstName", {
                required: "First name is required",
              })}
              placeholder="Your First Name"
              className="p-3 bg-white text-black  w-full"
            />
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Your Last Name"
              className="p-3 bg-white text-black  w-full mt-4"
            />

            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
              placeholder="Your Email"
              className="p-3 bg-white text-black  w-full mt-4"
            />
            <input
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Your Cell Phone"
              className="p-3 bg-white text-black  w-full mt-4"
            />
            <button
              type="submit"
              className="mt-4 bg-red-500 px-6 py-2 text-white font-semibold  hover:bg-red-700 w-full"
            >
              Request an Appointment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
