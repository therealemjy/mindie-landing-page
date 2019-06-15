import React, { useState, useEffect, useRef, useContext } from 'react';

import Api from 'libs/api';
import SignUpForm from 'components/SignUpForm';
import apiContext from 'contexts/api';

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

  const previousStepRef = useRef(0);

  const api: Api | undefined = useContext(apiContext);

  useEffect(() => {
    if (previousStepRef.current === step || !api) {
      return;
    }

    previousStepRef.current = step;

    if (step === 1 && values.email.length > 0) {
      // Save user's email
      api!.registerUser(values.email);
    } else if (step === 2 && values.motivation) {
      console.log(values);
      // Save user's motivation
      api!.registerUserMotivation(values.motivation!);
    }
  });

  const handleChange = ({ name, value }: ChangeEvent) =>
    setValues({
      ...values,
      [name]: value,
    });

  const handleSubmit = () => setStep(step + 1);

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
