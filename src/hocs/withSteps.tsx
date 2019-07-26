import React, { useState } from 'react';

const withSteps = (Component: React.SFC) => (componentProps: any) => {
  const [step, setStep] = useState(0);

  return <Component {...componentProps} step={step} setStep={setStep} />;
};

export default withSteps;
