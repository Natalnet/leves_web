import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Initial from '../pages/Initial';
import Register from '../pages/Register';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Initial} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
