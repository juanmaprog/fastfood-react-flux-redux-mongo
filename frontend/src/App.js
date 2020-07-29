import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation.js";
// import NotesList from "./components/NotesList.js";
// import CreateNote from "./components/CreateNote";
// import CreateUser from "./components/CreateUser";

import Carta from "./components/Carta";
import Home from "./components/Home";
import SingIn from "./components/SignIn";
import SingUp from "./components/SingUp";


function App() {
  return (
    <Router>
      <Navigation />

      <Route path="/" exact component={Home}  />
      <Route path="/carta" component={Carta} />
      <Route path="/singup" component={SingUp} />
      <Route path="/singin" component={SingIn} />
    </Router>
  );
}

export default App;
