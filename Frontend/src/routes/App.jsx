import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../containers/Login'
import RememberInfo from '../components/RememberInfo'
import Bacteriologist from '../containers/Bacteriologist'
import AddExamsResults from '../containers/AddExamsResults'
import '../assets/styles/App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/remember" component={RememberInfo} />
        <Route exact path="/bacteriologist" component={Bacteriologist} />
        <Route exact path="/addExamResults" component={AddExamsResults} />
      </Switch>
    </BrowserRouter>
  );
}

export default App