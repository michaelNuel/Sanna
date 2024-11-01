"use client";
import { useFormContext } from "@/context/FormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Define the validation schema
const ProjectDetailsFormSchema = yup.object().shape({
  projectGoals: yup.string().required("Goals are Required"),
  significance: yup
    .string()
    .required("The significance of your research is required"),
  expectations: yup.string().required("This is required"),
});

interface ProjectDetailsFormData {
  projectGoals: string;
  significance: string;
  expectations: string;
}

const ProjectDetails = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectDetailsFormData>({
    defaultValues: {
      projectGoals: formData.projectGoals,
      significance: formData.significance,
      expectations: formData.expectations,
    },
    resolver: yupResolver(ProjectDetailsFormSchema),
  });

  // Function to handle form submission
  const handleNext = (data: ProjectDetailsFormData) => {
    setFormData({ ...formData, ...data });
    router.push("/funding-request"); // Change route as needed
  };

  // Function to handle back navigation
  const handleBack = () => {
    router.push("/project-overview"); // Change to the desired back route
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
      <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-hidden">
        <div className="flex flex-col mx-10 my-10 gap-2 overflow-y-auto h-full scrollbar-hide">
          <div>
            <Image
              alt="Project Overview Icon"
              src="/PD.svg"
              height={350}
              width={350}
            />
          </div>
          <form
            onSubmit={handleSubmit(handleNext)}
            className="flex flex-col gap-4 mt-8"
          >
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Project Goals</label>
              <Controller
                name="projectGoals"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Project Goals"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }} // Set width and height
                  />
                )}
              />
              {errors.projectGoals && (
                <p className="text-red-500 text-xs">
                  {errors.projectGoals.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">
                Significance in Archaeological knowledge
              </label>
              <Controller
                name="significance"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Significance of your research"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }} // Set width and height
                  />
                )}
              />
              {errors.significance && (
                <p className="text-red-500 text-xs">
                  {errors.significance.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">
                Expectated Impact and Public Access{" "}
                <span className="text-sm font-mono italic">
                  (if there are other sources of funding within the Web3
                  ecosystem, e.g, DAOs, grants, partnerships)
                </span>
              </label>
              <Controller
                name="expectations"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Expectations"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }} // Set width and height
                  />
                )}
              />
              {errors.expectations && (
                <p className="text-red-500 text-xs">
                  {errors.expectations.message}
                </p>
              )}
            </div>

            <div className="flex justify-between align-middle">
              <div>
                <button
                  type="button" // Change type to "button"
                  onClick={handleBack} // Attach the back handler
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

export default ProjectDetails;
