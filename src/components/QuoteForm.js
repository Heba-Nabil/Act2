"use client";

import { useContext, useRef, useState } from "react";
import { ResourcesContext } from "@/contexts/DataContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AnimatedTitle from "./AnimatedTitle";
import { Buttons } from "./GlobalButtons";
import ReCAPTCHA from "react-google-recaptcha";

const QuoteForm = ({ projectConfig }) => {
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
      company: "",
      companySubject: "",
      message: "",
    },
  });

  const SubmitContact = async (data) => {
    if (captchaData) {
      const formattedMessage = `
            Company Name: ${data.company} <br/>
            Company Subject: ${data.companySubject} <br/>
            Message: ${data.message}
        `;

      const formData = new FormData();
      formData.append("NameFirst", data.name);
      formData.append("Email", data.email);
      formData.append("Phone", data.phone);
      formData.append("Message", formattedMessage);
      formData.append("Subject", "Quote Form");

      try {
        const res = await fetch(`${location.origin}/api/contact`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data?.hasError) {
          toast.error(data?.message);
          return;
        } else {
          toast.success(data?.message);
          reset();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setCaptchaError("");
      }
    } else {
      setCaptchaError("This feild is required");
    }
  };

  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
      <AnimatedTitle
        title={`${useTranslate("qetAQuote")}`}
        className="text-primary text-2xl md:text-4xl mb-10 text-center"
      />
      <form onSubmit={handleSubmit(SubmitContact)}>
        <div className="mb-6">
          <input
            type="text"
            placeholder={useTranslate("nameQoute")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none invalid:border-red-500 autofill:bg-yellow-200"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
            })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder={useTranslate("emailQoute")}
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
            placeholder={useTranslate("phoneQoute")}
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
          <input
            type="text"
            placeholder={useTranslate("yourCompanyQoute")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("company", {
              required: { value: true, message: "Please enter company name" },
            })}
          />
          {errors.company && (
            <span className="text-red-500">{errors.company.message}</span>
          )}
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder={useTranslate("yourSubjectQoute")}
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            {...register("companySubject")}
          />
          {errors.companySubject && (
            <span className="text-red-500">
              {errors.companySubject.message}
            </span>
          )}
        </div>
        <div className="mb-6">
          <textarea
            rows="6"
            placeholder={useTranslate("yourMessageQoute")}
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
                        Send Message
                    </button> */}

          <Buttons type="submit">{useTranslate("sendMessage")}</Buttons>
        </div>
      </form>
    </div>
  );
};
export default QuoteForm;
