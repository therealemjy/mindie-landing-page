import React, { useEffect, useRef } from 'react';
import * as TypeformEmbed from '@typeform/embed';

import config from 'config';

import * as Style from './style';
import { isWindowAvailable, isDev } from '../../utils';

export interface Props {
  onSubmit: () => void;
  email: string;
}

const SignUpForm: React.SFC<Props> = ({ onSubmit, email }) => {
  const containerRef = useRef(null);

  const handleSubmit = () => {
    // Google analytics
    if (isWindowAvailable && !isDev) {
      // TODO: Add email of customer to keep track of the progress
      (window as any).ga(
        'send',
        'event',
        'CardDetailsForm',
        'SignUpFormCompleted',
        email
      );
    }

    return onSubmit();
  };

  useEffect(() => {
    // Initialise Typeform
    // TODO: Add email of customer to keep track of the progress
    TypeformEmbed.makeWidget(
      containerRef.current,
      `${config.typeform.url}?email=${email}`,
      {
        onSubmit: handleSubmit,
      }
    );
  }, []);

  return <Style.Container ref={containerRef} />;
};

export default SignUpForm;
