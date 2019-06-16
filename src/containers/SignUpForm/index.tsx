import React, { useContext } from 'react';

import Api from 'libs/api';
import SignUpForm, { Values } from 'components/SignUpForm';
import apiContext from 'contexts/api';
import registration, {
  UPDATE_VALUES,
  INCREMENT_STEP,
} from 'contexts/registration';

export interface ChangeEvent {
  name: string;
  value: any;
}

const ContainedSignUpForm: React.SFC = () => {
  const { state, dispatch } = useContext(registration.Context);
  const api: Api | undefined = useContext(apiContext);

  const handleChange = ({ name, value }: ChangeEvent) =>
    dispatch({ type: UPDATE_VALUES, values: { [name]: value } });
  const handleSubmit = async (step: number, values: Values) => {
    if (
      (step === 0 && !values.email.length) ||
      (step === 1 && !values.motivation)
    ) {
      return;
    }

    // console.log(step, values);

    if (step === 0 && values.email.length > 0) {
      // Save user's email
      await api!.registerUser(values.email);
    } else if (step === 1 && values.motivation) {
      // Save user's motivation
      // Note: here we don't wait for the request to have been executed since it's the last step
      api!.registerUserMotivation(values.motivation!);
    }

    dispatch({ type: INCREMENT_STEP });
  };

  return (
    <SignUpForm
      step={state.step}
      values={state.values}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default ContainedSignUpForm;
