import { FormProvider } from '@/context/FormContext';
import React from 'react'


export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
      <FormProvider>
        <div>{children}</div>
      </FormProvider>
    );
  }