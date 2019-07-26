import React, { useState } from 'react';
import { navigate } from 'gatsby';

import PreSignUpForm from 'components/PreSignUpForm';
import { isWindowAvailable, isDev } from '../../utils';

export interface Props {
  label: string;
  analyticLabel: string;
}

const ContainedPreSignUpForm: React.SFC<Props> = props => {
  const [email, setEmail] = useState('');

  const handleChange = (email: string) => setEmail(email);

  const handleSubmit = (email: string) => {
    if (email.length > 0) {
      navigate(`/sign-up?email=${email}`);
    }

    if (isWindowAvailable && !isDev) {
      // Google analytics
      (window as any).ga(
        'send',
        'event',
        props.analyticLabel,
        'entered',
        email
      );
    }
  };

  return (
    <PreSignUpForm
      {...props}
      email={email}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default ContainedPreSignUpForm;
