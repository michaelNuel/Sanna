'use client'
import { useFormContext } from '@/context/FormContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema
const AppFormSchema = yup.object().shape({
  fullName: yup.string().required("Estimate Budget of the Project is Required"),
  email: yup.string().required("Your Funding Wallet is required"),
  contact: yup.string().required("This field is required"),
  position: yup.string().required("This is required"),
  institution: yup.string().required("This is required"),
});

interface AppFormData {
  fullName: string;
  email: string;
  contact: string;
  position: string;
  institution: string;
}

const Application = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AppFormData>({
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      position: formData.position,
      institution: formData.institution
    },
    resolver: yupResolver(AppFormSchema),
  });

  // Function to handle form submission
  const handleNext = (data: AppFormData) => {
    setFormData({ ...formData, ...data });
    router.push("/project-overview"); // Update this to the next route you need
  };



  return (
    <div className="flex h-screen w-screen">
      <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
      <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-hidden">
        <div className="flex flex-col mx-10 my-10 gap-2 overflow-y-auto h-full scrollbar-hide">
          <div>
            <Image
              alt="Funding Request Icon"
              src="/FRD.svg"
              height={350}
              width={350}
            />
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
                    placeholder="Total Funding"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
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
              <label className="text-white text-sm mb-2">Email </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter Email"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email.message}
                </p>
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
                    placeholder="Enter Phone number"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.contact && (
                <p className="text-red-500 text-xs">
                  {errors.contact.message}
                </p>
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
                    placeholder="Other Sources of Funding"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
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
                    placeholder="Other Sources of Funding"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.institution && (
                <p className="text-red-500 text-xs">
                  {errors.institution.message}
                </p>
              )}
            </div>

            <div className="flex justify-between align-middle ">
              <div >
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-2xl"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
