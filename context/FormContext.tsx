'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  fullName?: string;
  email?: string;
  contact: string;
  position: string;
  institution:string;
  projectTitle: string;
  researchArea: string;
  location: string;
  startDate: string;
  endDate: string;
  researchCommunity: string;
  projectGoals: string;
  significance: string;
  expectations: string;
  totalFunding:  string;
  fundingWallet: string;
  budgetAllocation: string;
  otherSources: string;
  dataTransparency: string;
  artifactRepresentation: string;
  accessEducation: string;
  permit: string;
  localEngagement: string;
  environmentalImapact: string;
  security: string;
  // Add other fields as necessary
}

interface FormContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        contact: '',
        position: '',
        institution: '',
        projectTitle: '',
        researchArea: '',
        location: '',
        startDate: '',
        endDate: '',
        researchCommunity : '',
        projectGoals: '',
        significance: '',
        expectations: '',
        totalFunding: '',
        fundingWallet: '',
        budgetAllocation: '',
        otherSources: '',
        dataTransparency: '',
        artifactRepresentation: '',
        accessEducation: '',
        permit: '',
        localEngagement: '',
        environmentalImapact: '',
        security: '',
      });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext must be used within a FormProvider');
  return context;
};
