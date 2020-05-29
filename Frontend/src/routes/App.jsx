import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/HomeLogin';
import RememberInfo from '../components/RememberInfo';
import Bacteriologist from '../containers/Bacteriologist';
import Administrator from '../containers/Administrator';
import Patient from '../containers/Patient';
import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/remember' component={RememberInfo} />
        <Route exact path='/bacteriologist' component={Bacteriologist} />
        <Route exact path='/administrator' component={Administrator} />
        <Route exact path='/patient' component={Patient} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
