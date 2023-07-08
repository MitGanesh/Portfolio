import React from 'react'
import { Toaster } from 'react-hot-toast';

const TostProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        }
      }}
    />
  );
}

export default TostProvider;