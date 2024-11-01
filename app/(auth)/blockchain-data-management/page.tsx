'use client'
import { useFormContext } from '@/context/FormContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema for the project details
const ProjectDetailsFormSchema = yup.object().shape({
  dataTransparency: yup.string().required("This is required"),
  artifactRepresentation: yup.string().required("The significance of your research is required"),
  accessEducation: yup.string().required("This is required"),
});

// Interface for the form data
interface ProjectDetailsFormData {
  dataTransparency: string;
  artifactRepresentation: string;
  accessEducation: string;
}

const Page = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  // Setup useForm with validation schema and default values
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectDetailsFormData>({
    resolver: yupResolver(ProjectDetailsFormSchema),
    defaultValues: {
      dataTransparency: formData.dataTransparency,
      artifactRepresentation: formData.artifactRepresentation,
      accessEducation: formData.accessEducation,
    },
  });

  // Handle form submission
  const handleNext: SubmitHandler<ProjectDetailsFormData> = (data) => {
    setFormData({ ...formData, ...data });
    router.push("/ethics"); // Adjust the route as necessary
  };

  // Handle back navigation
  const handleBack = () => {
    router.push("/funding-request"); // Adjust the route as necessary
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
      <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-hidden">
        <div className="flex flex-col mx-10 my-10 gap-2 overflow-y-auto h-full scrollbar-hide">
          <div>
            <Image
              alt="Project Overview Icon"
              src="/BDM.svg"
              height={350}
              width={350}
            />
          </div>
          <form
            onSubmit={handleSubmit(handleNext)}
            className="flex flex-col gap-4 mt-8"
          >
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Data Transparency</label>
              <Controller
                name="dataTransparency"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Data Transparency"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }}
                  />
                )}
              />
              {errors.dataTransparency && (
                <p className="text-red-500 text-xs">
                  {errors.dataTransparency.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Significance in Archaeological Knowledge</label>
              <Controller
                name="artifactRepresentation"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Significance of your research"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }}
                  />
                )}
              />
              {errors.artifactRepresentation && (
                <p className="text-red-500 text-xs">
                  {errors.artifactRepresentation.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">
                Expected Impact and Public Access{" "}
              
              </label>
              <Controller
                name="accessEducation"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Expected Impact"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                    style={{ width: "549px", height: "183px" }}
                  />
                )}
              />
              {errors.accessEducation && (
                <p className="text-red-500 text-xs">
                  {errors.accessEducation.message}
                </p>
              )}
            </div>

            <div className="flex justify-between align-middle">
              <div>
                <button
                  type="button" // Correct button type for back navigation
                  onClick={handleBack} // Attach the back handler
                  className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-2xl"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  type="submit" // Submit button for form submission
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

export default Page;
