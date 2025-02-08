'use client'
import Error from '@/app/error';
import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) =>{
    return <Error error={error} reset={resetErrorBoundary} />
  }

export default ErrorFallback