"use client";
import { useFormContext } from "@/context/FormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface ApplicationFormData {
  fullName: string;
  email: string;
  contact: string;
  position: string;
  institution: string;
}

export const ApplicationFormSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.string().required("Contact is required"),
  position: yup.string().required("Position is required"),
  institution: yup.string().required("Institution is required"),
});

const ApplicationForm = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      position: formData.position,
      institution: formData.institution,
    },
    resolver: yupResolver(ApplicationFormSchema), // Optional, if you want Yup validation
  });

  const handleNext = (data: ApplicationFormData) => {
    // Update form data and navigate to the next page
    setFormData({ ...formData, ...data });
    router.push("/project-overview");
  };
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
      <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-">
        <div className="flex flex-col mx-10 my-10 gap-2 overflow-y-auto scrollbar-hide">
          <div>
            <Image alt="#" src={"/AppForm.svg"} height={350} width={350} />
          </div>
          <form
            onSubmit={handleSubmit(handleNext)}
            className="flex flex-col gap-4 mt-8"
          >
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Full Name</label>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Full Name"
                    className="input-style bg-[#1E1E1E] py-3 placeholder: pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="input-style bg-[#1E1E1E] py-3 placeholder: pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Contact/Info</label>
              <Controller
                name="contact"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Contact"
                    className="input-style bg-[#1E1E1E] py-3 placeholder: pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.contact && (
                <p className="text-red-500 text-xs">{errors.contact.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Position/Title</label>
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Position"
                    className="input-style bg-[#1E1E1E] py-3 placeholder: pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.position && (
                <p className="text-red-500 text-xs">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Institution/Organization</label>
              <Controller
                name="institution"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Institution"
                    className="input-style bg-[#1E1E1E] py-3 placeholder: pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.institution && (
                <p className="text-red-500 text-xs">
                  {errors.institution.message}
                </p>
              )}
            </div>

            <div className="grid place-content-end">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-2xl"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
