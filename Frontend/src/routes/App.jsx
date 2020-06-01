import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import Layout from "../components/Layout";
import Login from "../containers/HomeLogin";
import RememberInfo from "../components/RememberInfo";
import Bacteriologist from "../containers/Bacteriologist";
import AddExamsResults from "../containers/AddExamsResults";
import Doctor from "../containers/Doctor";
import PatientInfo from "../containers/PatientInfo";
import PersonalInfo from "../components/PersonalInfo";
import MedicalHistory from "../components/MedicalHistory";
import SheduleExams from "../components/SheduleExams";
import Administrator from "../containers/Administrator";
import Patient from "../containers/Patient";
import NotFound from "../containers/NotFound";
import "../assets/styles/App.scss";
import AddUser from "../containers/AddUser";

const App = ({ user }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/remember" component={RememberInfo} />
        {/* {user && user.roles && user.roles.length > 0 && ( */}
        <Layout>
          { user && user.roles && user.roles.find(role => role.name === "bacteriologist") > 0 && (
            <>
              <Route exact path="/bacteriologist" component={Bacteriologist} />
              <Route exact path="/addExamResults" component={AddExamsResults} />
            </>
          )}
          <Route exact path="/doctor" component={Doctor} />
          <Route
            path="/(personalInfo|medicalHistory|sheduleExams)/"
            component={PatientInfo}
          />
          <Route exact path="/personalInfo" component={PersonalInfo} />
          <Route exact path="/medicalHistory" component={MedicalHistory} />
          <Route exact path="/sheduleExams" component={SheduleExams} />
          <Route exact path="/administrator" component={Administrator} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/addUser" component={AddUser} />
        </Layout>
        {/* )} */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);
