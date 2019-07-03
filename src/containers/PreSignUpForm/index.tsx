import React, { useState } from 'react';

import PreSignUpForm from 'components/PreSignUpForm';

const ContainedPreSignUpForm: React.SFC = props => {
  const [email, setEmail] = useState('');

  const handleChange = (email: string) => setEmail(email);

  const handleSubmit = (email: string) => {
    // TODO: redirect to /sign-up page
    console.log('REDIRECT');
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
