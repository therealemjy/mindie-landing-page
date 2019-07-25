import React, { useEffect, useRef } from 'react';
import * as TypeformEmbed from '@typeform/embed';

import config from 'config';

import * as Style from './style';

export interface Props {
  onSubmit: () => void;
}

const SignUpForm: React.SFC<Props> = ({ onSubmit }) => {
  const containerRef = useRef(null);

  const handleSubmit = () => {
    // Google analytics
    if (typeof window !== 'undefined') {
      // TODO: Add email of customer to keep track of the progress
      (window as any).ga(
        'send',
        'event',
        'CardDetailsForm',
        'SignUpForm',
        'completed'
      );
    }

    return onSubmit();
  };

  useEffect(() => {
    // Initialise Typeform
    // TODO: Add email of customer to keep track of the progress
    TypeformEmbed.makeWidget(containerRef.current, config.typeform.url, {
      handleSubmit,
    });
  }, []);

  return <Style.Container ref={containerRef} />;
};

export default SignUpForm;
