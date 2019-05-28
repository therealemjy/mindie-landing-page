import React from 'react';
import { Router } from '@reach/router';

import * as ROUTES from 'config/routes';
import Home from 'pages/home';

export default function App() {
  return (
    <Router>
      <Home path={ROUTES.HOME} />
    </Router>
  );
}
