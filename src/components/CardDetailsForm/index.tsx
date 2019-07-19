import React from 'react';
import { CardElement } from 'react-stripe-elements';

import { Form, SubmitButton } from 'components/Form';

export interface Props {
  onSubmit: () => void;
  onReady?: (element: any) => void;
}

const handleSubmit = (callback: Props['onSubmit']) => (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  callback();
};

const CardDetailsForm: React.SFC<Props> = ({ onSubmit, onReady }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <CardElement onReady={onReady} />
    <SubmitButton type="submit">Valider et continuer</SubmitButton>
  </Form>
);

export default CardDetailsForm;
