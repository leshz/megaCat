import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../containers/Login'
import RememberInfo from '../components/RememberInfo'
import Bacteriologist from '../containers/Bacteriologist'
import Header from '../containers/header'
import '../assets/styles/App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/remember" component={RememberInfo} />
        <Route exact path="/bacteriologist" component={Bacteriologist} />
        <Route exact path="/_header" component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App