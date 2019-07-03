import React, { useEffect, useRef } from 'react';
import * as TypeformEmbed from '@typeform/embed';

import config from 'config';

import * as Style from './style';

export interface Props {
  onSubmit: () => void;
}

const SignUpForm: React.SFC<Props> = ({ onSubmit }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialise Typeform
    TypeformEmbed.makeWidget(containerRef.current, config.typeform.url, {
      onSubmit,
    });
  }, []);

  return <Style.Container ref={containerRef} />;
};

export default SignUpForm;
