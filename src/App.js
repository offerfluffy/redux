import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/Home";
import SignUpPage from "./components/pages/SignUp";
import UserListPage from "./components/pages/UserList";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/userlist" component={UserListPage} />
      </Switch>
    </Router>
  );
}

export default App;
