import React from 'react';
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
    </div>
  );
}

export default App;
