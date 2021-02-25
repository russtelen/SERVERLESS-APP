import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/general/Header";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProfileList} />
        <Route exact path="/profiles" component={ProfileList} />
        <Route exact path="/profiles/:id" component={ProfileDetails} />
      </Switch>
    </Router>
  );
}

export default App;
