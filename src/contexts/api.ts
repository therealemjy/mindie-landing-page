import { createContext } from 'react';

import Api from 'libs/api';

const ApiContext = createContext<undefined | Api>(undefined);

export default ApiContext;
