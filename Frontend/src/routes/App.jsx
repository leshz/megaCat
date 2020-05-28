import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
// import { IndexRoute } from 'react-router';
import Layout from '../components/Layout'
import Login from '../containers/Login';
import RememberInfo from '../components/RememberInfo';
import Bacteriologist from '../containers/Bacteriologist';
import AddExamsResults from '../containers/AddExamsResults';
import Doctor from '../containers/Doctor';
import Patient from '../containers/Patient';
import PersonalInfo from '../components/PersonalInfo';
import MedicalHistory from '../components/MedicalHistory';
import SheduleExams from '../components/SheduleExams';
import '../assets/styles/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/remember" component={RememberInfo} />
          <Layout>
            <Route exact path="/bacteriologist" component={Bacteriologist} />
            <Route exact path="/addExamResults" component={AddExamsResults} />
            <Route exact path="/doctor" component={Doctor} />
            <Route exact path="/patient" component={Patient} />
            <Route exact path="/personalInfo" component={PersonalInfo} />
            <Route exact path={'/medicalHistory'} component={MedicalHistory} />
            <Route exact path={'/sheduleExams'} component={SheduleExams} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}
