import React, { useState } from 'react';

import SignUpForm from 'components/SignUpForm';

export interface ChangeEvent {
  name: string;
  value: any;
}

const ContainedSignUpForm: React.SFC = () => {
  const [values, setValues] = useState({
    email: '',
    motivation: undefined,
  });
  const [step, setStep] = useState(0);

  const handleChange = ({ name, value }: ChangeEvent) =>
    setValues({
      ...values,
      [name]: value,
    });

  const handleSubmit = () => {
    if (step === 0) {
      // TODO: save user's email in Firebase DB
    }

    if (step === 1) {
      // TODO: save user's motivation in Firebase DB
    }

    setStep(step + 1);
  };

  return (
    <SignUpForm
      step={step}
      values={values}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default ContainedSignUpForm;
