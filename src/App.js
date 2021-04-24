import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Other components
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Catalog from "./component/Catalog";
import CourseDisplay from "./component/CourseDisplay";
import CourseSidebar from "./component/CourseSidebar";
import Login from "./component/Login";
import TestId from "./component/Testid";
import Profile from "./component/Profile";
//others
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={homepage} />
          {/* <Route path="/catalog" component={catalog} /> */}
          <Route path="/catalog/:username" component={catalog} />
          {/* {["/catalog", "/catalog/:username"].map((path) => (
            <Route path={path} component={catalog} />
          ))} */}
          <Route path="/course/:coursename" component={coursedisplay} />
          <Route path="/login" component={loginUser} />
          <Route path="/test/:id" component={TestId} />
          <Route path="/profile/:username" component={profile} />
        </Switch>
      </div>
    </Router>
  );
}
const homepage = () => (
  <Fragment>
    <Navbar />
    <Homepage />
  </Fragment>
);
const catalog = (props) => (
  <Fragment>
    {console.log("catalog", props.match.params.username)}
    <Navbar username={props.match.params.username} />
    <Catalog
      username={
        props.match.params.username === undefined
          ? "catalog"
          : props.match.params.username
      }
    />
  </Fragment>
);
const coursedisplay = (props) => (
  <Fragment>
    <Navbar username={props.match.params.username} />
    <div className="row pt-5 mx-auto">
      {/* <CourseSidebar /> */}
      <CourseDisplay coursename={props.match.params.coursename} />
    </div>
  </Fragment>
);
const loginUser = () => (
  <Fragment>
    <Login />
  </Fragment>
);
const profile = (props) => (
  <Fragment>
    <Navbar username={props.match.params.username} />
    <Profile username={props.match.params.username} />
  </Fragment>
);

export default App;
