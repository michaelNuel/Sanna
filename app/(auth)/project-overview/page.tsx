"use client";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

// Define the form schema with Yup
const ProjectFormSchema = yup.object().shape({
  projectTitle: yup.string().required("Title of the Project is Required"),
  researchArea: yup.string().required("Your Research Area is required"),
  location: yup.string().required("Location is required"),
  startDate: yup.string().required("Start Date is required"),
  endDate: yup.string().required("End Date is required"),
  researchCommunity: yup.string().required("Research Community is required"),
});

interface ProjectFormData {
  projectTitle: string;
  researchArea: string;
  location: string;
  startDate: string;
  endDate: string;
  researchCommunity: string;
}

const ProjectOverview = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    defaultValues: {
      projectTitle: formData.projectTitle,
      researchArea: formData.researchArea,
      location: formData.location,
      startDate: formData.startDate,
      endDate: formData.endDate,
      researchCommunity: formData.researchCommunity,
    },
    resolver: yupResolver(ProjectFormSchema),
  });

  const handleNext = (data: ProjectFormData) => {
    setFormData({ ...formData, ...data });
    router.push("/nextStep"); // Change route as needed
  };

  const handleBack = () => {
    router.push("/application-form"); // Change to the desired back route
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
      <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-hidden">
        <div className="flex flex-col mx-10 my-10 gap-2 overflow-y-auto h-full scrollbar-hide">
          <div>
            <Image
              alt="Project Overview Icon"
              src="/PO.svg"
              height={350}
              width={350}
            />
          </div>
          <form
            onSubmit={handleSubmit(handleNext)}
            className="flex flex-col gap-4 mt-8"
          >
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Project Title</label>
              <Controller
                name="projectTitle"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Project Title"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.projectTitle && (
                <p className="text-red-500 text-xs">
                  {errors.projectTitle.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Research Area</label>
              <Controller
                name="researchArea"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Research Area"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.researchArea && (
                <p className="text-red-500 text-xs">
                  {errors.researchArea.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Location</label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Location"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.location && (
                <p className="text-red-500 text-xs">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Start Date</label>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.startDate && (
                <p className="text-red-500 text-xs">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">End Date</label>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.endDate && (
                <p className="text-red-500 text-xs">{errors.endDate.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">
                Research Community
              </label>
              <Controller
                name="researchCommunity"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Research Community"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.researchCommunity && (
                <p className="text-red-500 text-xs">
                  {errors.researchCommunity.message}
                </p>
              )}
            </div>

            <div className="flex justify-between align-middle">
              <div>
              <button
                  type="submit"
                  onClick={handleBack}
                  className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-2xl"
                >
                  Back
                </button>
              </div>
              <div> 
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

export default ProjectOverview;
