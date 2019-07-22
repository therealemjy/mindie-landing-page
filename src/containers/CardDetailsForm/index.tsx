import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { injectStripe } from 'react-stripe-elements';

import { AppError } from '../../types/error';
import config from 'config';
import CardDetailsForm, {
  Props as ICardDetailsForm,
} from 'components/CardDetailsForm';

export interface Props extends ICardDetailsForm {
  email: string;
}

interface IContainedCardDetailsForm {
  stripe: any; // TODO: define typing
  onSubmit: () => void;
  email: string;
}

const ContainedCardDetailsForm: React.SFC<IContainedCardDetailsForm> = ({
  stripe,
  onSubmit,
  email,
  ...otherProps
}) => {
  const [clientSecret, setClientSecret] = useState<undefined | string>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<undefined | boolean>(false);
  const [errorMessage, setErrorMessage] = useState<undefined | string>(
    undefined
  );
  const [cardElementRef, setCardElementRef] = useState<undefined | any>(
    undefined
  );

  useEffect(() => {
    const fetchSetupIntent = async () => {
      setIsLoading(true);

      try {
        // Fetch client secret
        const { data } = await Axios({
          method: 'post',
          url: config.api.setupIntentUrl,
        });

        setClientSecret(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSetupIntent();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);

    // Save card details
    const [
      { setupIntent, error: errorHandleCardSetup },
      { token, error: errorCreateToken },
    ] = await Promise.all([
      stripe.handleCardSetup(clientSecret, cardElementRef),
      stripe.createToken(),
    ]);

    if (errorHandleCardSetup || errorCreateToken) {
      setIsLoading(false);
      setErrorMessage((errorHandleCardSetup || errorCreateToken).message);
      return;
    }

    // Create customer
    try {
      await Axios({
        method: 'post',
        url: config.api.createCustomerUrl,
        data: {
          email,
          paymentMethodId: setupIntent.payment_method,
          tokenId: token.id,
        },
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }

    // Callback
    onSubmit();
  };

  if (!clientSecret) {
    return <>Chargement...</>;
  }

  return (
    <CardDetailsForm
      {...otherProps}
      onSubmit={handleSubmit}
      onReady={setCardElementRef}
      isLoading={isLoading}
      error={errorMessage}
    />
  );
};

export default injectStripe(ContainedCardDetailsForm) as React.ComponentType<
  Props
>;
