import React from 'react';
import { CardElement } from 'react-stripe-elements';

import * as Style from './style';
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
    <Style.CardElementContainer>
      <CardElement onReady={onReady} style={Style.CardElement} />
    </Style.CardElementContainer>
    <SubmitButton type="submit">Valider et continuer</SubmitButton>
  </Form>
);

export default CardDetailsForm;
