import React, { useEffect, useRef } from 'react';
import * as TypeformEmbed from '@typeform/embed';

import config from 'config';

import * as Style from './style';

const SignUpForm: React.SFC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialise Typeform
    TypeformEmbed.makeWidget(containerRef.current, config.typeform.url);
  }, []);

  return <Style.Container ref={containerRef} />;
};

export default SignUpForm;
