'use client'
import { useFormContext } from '@/context/FormContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema
const ProjectFormSchema = yup.object().shape({
  totalFunding: yup.string().required("Estimate Budget of the Project is Required"),
  fundingWallet: yup.string().required("Your Funding Wallet is required"),
  budgetAllocation: yup.string().required("This field is required"),
  otherSources: yup.string().required("This is required"),
});

interface ProjectFormData {
  totalFunding: string;
  fundingWallet: string;
  budgetAllocation: string;
  otherSources: string;
}

const FundingRequest = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    defaultValues: {
      totalFunding: formData.totalFunding,
      fundingWallet: formData.fundingWallet,
      budgetAllocation: formData.budgetAllocation,
      otherSources: formData.otherSources,
    },
    resolver: yupResolver(ProjectFormSchema),
  });

  // Function to handle form submission
  const handleNext = (data: ProjectFormData) => {
    setFormData({ ...formData, ...data });
    router.push("/blockchain-data-management"); // Update this to the next route you need
  };

  // Function to handle back navigation
  const handleBack = () => {
    router.push("/project-details"); // Update this to the desired back route
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
              <label className="text-white text-sm mb-2">Total Funding</label>
              <Controller
                name="totalFunding"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Total Funding"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.totalFunding && (
                <p className="text-red-500 text-xs">
                  {errors.totalFunding.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Funding Wallet</label>
              <Controller
                name="fundingWallet"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Funding Wallet"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.fundingWallet && (
                <p className="text-red-500 text-xs">
                  {errors.fundingWallet.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Budget Allocation</label>
              <Controller
                name="budgetAllocation"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Budget Allocation"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.budgetAllocation && (
                <p className="text-red-500 text-xs">
                  {errors.budgetAllocation.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Other Sources</label>
              <Controller
                name="otherSources"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Other Sources of Funding"
                    className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                  />
                )}
              />
              {errors.otherSources && (
                <p className="text-red-500 text-xs">
                  {errors.otherSources.message}
                </p>
              )}
            </div>

            <div className="flex justify-between align-middle ">
              <div >
                <button
                  type="button" // Change to type button
                  onClick={handleBack} // Attach back handler
                  className="mt-4 bg-purple-500 text-white w-full px-6 py-2 rounded-2xl"
                >
                  Back
                </button>
              </div>
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

export default FundingRequest;
