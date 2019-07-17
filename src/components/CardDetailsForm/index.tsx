import React from 'react';
import { CardElement } from 'react-stripe-elements';

// import * as Style from './style';

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
  <form onSubmit={handleSubmit(onSubmit)}>
    <CardElement onReady={onReady} />
    <button type="submit">Submit</button>
  </form>
);

export default CardDetailsForm;
