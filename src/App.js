import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/general/Header";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact to="/profiles" component={ProfileList} />
      </Switch>
    </Router>
  );
}

export default App;
