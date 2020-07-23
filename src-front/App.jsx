import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import './components/header.css';
import Login from "./components/Login/Login.jsx";



function App() {
  return (
    <div className="App">
        <Login></Login>
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register.jsx";

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/register" exact component={Register}></Route>
        </Switch>
        
      </Router>
>>>>>>> 001bcc36a23daa74e459fb82522f69ced7c1a2d7
    </div>
  );
}

export default App;
