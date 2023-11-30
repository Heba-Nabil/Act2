"use client";

import { useContext, useRef, useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import { ResourcesContext } from "@/contexts/DataContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Buttons } from "../GlobalButtons";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ projectConfig }) => {
  const [captchaData, setCaptchaData] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const captchaRef = useRef(null);
  const handleCaptchaChange = () => {
    const token = captchaRef.current.getValue();
    if (token) {
      setCaptchaData(token);
    }
  };
  const { useTranslate } = useContext(ResourcesContext);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const SubmitContact = async (data) => {
    if (captchaData) {
      const formData = new FormData();
      formData.append("NameFirst", data.userName);
      formData.append("Email", data.email);
      formData.append("Phone", data.phone);
      formData.append("Message", data.message);
      formData.append("Subject", "Contact Form");
      formData.append("Captcha", captchaData);

      try {
        const res = await fetch(`${location.origin}/api/contact`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();

        if (data.hasError) {
          toast.error(data?.message);
          return;
        } else {
          console.log(data.message);
          toast.success(data.message);
          reset();
        }
      } catch (error) {
        console.log(error);
      } finally{
        setCaptchaError("")

      }
    }else {
        setCaptchaError("This feild is required")
    }
  };

  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
      <AnimatedTitle
        title={`${useTranslate("getInTouch")}`}
        className="text-primary text-2xl md:text-4xl mb-10"
      />
      <form onSubmit={handleSubmit(SubmitContact)}>
        <div className="mb-6">
          <input
            type="text"
            placeholder={useTranslate("namePlaceholder")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("userName", {
              required: { value: true, message: "Please enter your name" },
            })}
          />
          {errors.userName && (
            <span className="text-red-500">{errors.userName.message}</span>
          )}
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder={useTranslate("emailPlaceholder")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("email", {
              required: { value: true, message: "Please enter your email" },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "The email is invalid",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder={useTranslate("phonePlaceholder")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("phone", {
              required: { value: true, message: "Please enter your phone" },
              pattern: { value: /^[0-9]+$/, message: "The phone is invalid" },
            })}
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-6">
          <textarea
            rows="6"
            placeholder={useTranslate("msgPlaceholder")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("message")}
          ></textarea>
        </div>
        {projectConfig.CaptchaClientKey && (
          <div className="mb-6">
            <ReCAPTCHA
               sitekey={projectConfig?.CaptchaClientKey}
               stoken={projectConfig?.CaptchaSecretKey}
              ref={captchaRef}
              onChange={handleCaptchaChange}
            />
            {captchaError && (
              <span className="text-red-500">{captchaError}</span>
            )}
          </div>
        )}
        <div>
          {/* <button
                        type="submit"
                        className=" text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] border-transparent hover:bg-none hover:bg-white hover:text-primary hover:border-primary w-full rounded-[34px] border p-3"
                    >
                        {useTranslate('submitContact')}
                    </button> */}
          <Buttons type="submit">{useTranslate("submitContact")}</Buttons>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
