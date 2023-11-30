"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ResourcesContext } from "@/contexts/DataContext";

const QuoteForm = async ({ locale }) => {
  const { useTranslate } = useContext(ResourcesContext)
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleContactSubmit = async ({ newsLetterEmail }) => {
    try {
      const res = await fetch(
        `${location.origin}/api/newsletter?locale=${locale}&email=${newsLetterEmail}`,
        { method: "POST" }
      );

      const data = await res.json();

      if (data?.hasError) {
        toast.error(data?.message);
        return;
      }

      toast.success(data?.message);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleContactSubmit)} className="block sm:flex justify-between items-stretch mt-12 sm:rounded-[47px] sm:mx-5 overflow-hidden border-2 border-[#e3e3e3]">
      <input
        className="bg-white h-14 sm:h-[68px] text-base leading-none text-gray-800 p-5 w-full sm:w-4/5 border border-transparent focus:outline-none rounded-[47px] sm:rounded-none mb-3 sm:mb-0"
        type="email"
        id="newsLetterEmail"
        required
        placeholder="Enter Your Email"
        {...register("newsLetterEmail", {
          required: { value: true, message: "Email is Required" },
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Email not valid",
          },
        })}
      />
      {errors.newsLetterEmail && (
        <span className="block mt-1 text-red-700 text-xs capitalize">
          {errors.newsLetterEmail.message}
        </span>
      )}
      
      <button type="submit" className="w-2/4 sm:w-1/4 h-14 sm:h-auto sm:rounded-l-none rounded-[47px] text-sm sm:text-base font-medium leading-none text-white p-2 sm:p-5 uppercase bg-primary">
        <div className="">{useTranslate("subscribe")}</div>
      </button>
    </form>
  );
};
export default QuoteForm;
