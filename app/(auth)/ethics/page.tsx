'use client'
import { useFormContext } from '@/context/FormContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema for the form
const ProjectDetailsFormSchema = yup.object().shape({
    permit: yup.string().required("This is required"),
    localEngagement: yup.string().required("The significance of your research is required"),
    environmentalImapact: yup.string().required("This is required"),
    security: yup.string().required("This is required"),
});

// Interface for the form data
interface ProjectDetailsFormData {
    permit: string;
    localEngagement: string;
    environmentalImapact: string;
    security: string;
}

const Ethics = () => {
    const router = useRouter();
    const { formData, setFormData } = useFormContext();

    // Setup the form using react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm<ProjectDetailsFormData>({
        resolver: yupResolver(ProjectDetailsFormSchema),
        defaultValues: {
            permit: formData.permit || '',
            localEngagement: formData.localEngagement || '',
            environmentalImapact: formData.environmentalImapact || '',
            security: formData.security || '',
        },
    });

    // Handle form submission
    const handleNext: SubmitHandler<ProjectDetailsFormData> = (data) => {
        setFormData({ ...formData, ...data });
        router.push("/#"); // Change to your desired route
    };

    // Handle back navigation
    const handleBack = () => {
        router.push("/blockchain-data-management"); // Change to your desired route
    };

    return (
        <div className="flex h-screen w-screen">
            <div className="bg-custom-image bg-cover h-screen bg-center w-full"></div>
            <div className="bg-PrimaryColor h-screen w-full flex flex-col overflow-hidden">
                <div className="flex flex-col mx-11 my-10 gap-2 overflow-y-auto h-full scrollbar-hide">
                    <div>
                        <Image
                            alt="Project Overview Icon"
                            src="/ECS.svg"
                            height={350}
                            width={350}
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit(handleNext)}
                        className="flex flex-col gap-4 mt-8"
                    >
                        <div className="flex flex-col">
                            <label className="text-white text-sm mb-2">Permit</label>
                            <Controller
                                name="permit"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        placeholder="Permit details"
                                        className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                                        style={{ width: "549px", height: "183px" }}
                                    />
                                )}
                            />
                            {errors.permit && (
                                <p className="text-red-500 text-xs">
                                    {errors.permit.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white text-sm mb-2">Local Engagement</label>
                            <Controller
                                name="localEngagement"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        placeholder="Local Engagement"
                                        className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                                        style={{ width: "549px", height: "183px" }}
                                    />
                                )}
                            />
                            {errors.localEngagement && (
                                <p className="text-red-500 text-xs">
                                    {errors.localEngagement.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white text-sm mb-2">Environmental Impact</label>
                            <Controller
                                name="environmentalImapact"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        placeholder="Environmental Impact"
                                        className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                                        style={{ width: "549px", height: "183px" }}
                                    />
                                )}
                            />
                            {errors.environmentalImapact && (
                                <p className="text-red-500 text-xs">
                                    {errors.environmentalImapact.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white text-sm mb-2">Security Considerations</label>
                            <Controller
                                name="security"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        placeholder="Security considerations"
                                        className="input-style bg-[#1E1E1E] py-3 pl-2 rounded-3xl"
                                        style={{ width: "549px", height: "183px" }}
                                    />
                                )}
                            />
                            {errors.security && (
                                <p className="text-red-500 text-xs">
                                    {errors.security.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between align-middle">
                            <div>
                                <button
                                    type="button" // Button type for back navigation
                                    onClick={handleBack} // Back button handler
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
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ethics;
