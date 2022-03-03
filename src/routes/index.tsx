import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Initial from '../pages/Initial';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Forms from '../pages/Forms';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Initial} isPrivate />
      <Route path="/questionario/:id" component={Forms} isPrivate />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
