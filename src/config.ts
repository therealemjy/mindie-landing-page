export interface Config {
  typeform: {
    url: string;
  };
  stripe: {
    publicKey: string;
  };
  api: {
    createCustomerUrl: string;
    setupIntentUrl: string;
  };
}

const config: Config = {
  typeform: {
    url: process.env.GATSBY_TYPEFORM_URL!,
  },
  stripe: {
    publicKey: process.env.GATSBY_STRIPE_PUBLIC_KEY!,
  },
  api: {
    createCustomerUrl: process.env.GATSBY_API_CREATE_CUSTOMER_URL!,
    setupIntentUrl: process.env.GATSBY_API_SETUP_INTENT_URL!,
  },
};

export default config;
