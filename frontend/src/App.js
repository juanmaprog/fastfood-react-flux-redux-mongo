import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation.js";
// import NotesList from "./components/NotesList.js";
// import CreateNote from "./components/CreateNote";
// import CreateUser from "./components/CreateUser";
import Footer from "./components/Footer/Footer";
import Carta from "./components/Carta/Carta";
import PublicMenu from "./components/PublicMenu/PublicMenu.js";
import PublicMenu2 from "./components/PublicMenu2/PublicMenu2.js";
/* import PublicMenu3 from "./components/PublicMenu3/PublicMenu3.js"; */
import Home from "./components/Home";
import SingIn from "./components/SignIn";
import SingUp from "./components/SingUp";


function App() {
  return (
    
    <div>
    <Router>
<<<<<<< HEAD
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
=======
      <Navigation />

      <Route path="/" exact component={Home}  />
>>>>>>> 5c1a633eb20789d1473b0fc924dd3d8cef5212b8
      <Route path="/carta" component={Carta} />
      <Route path="/singup" component={SingUp} />
      <Route path="/singin" component={SingIn} />
      <Route path="/publicmenu" component={PublicMenu} />
      <Route path="/publicmenu2" component={PublicMenu2} />
      {/* <Route path="/publicmenu3" component={PublicMenu3} /> */}
      {/* <Route path="/publicmenu4" component={PublicMenu4} />
      <Route path="/publicmenu5" component={PublicMenu5} />
      <Route path="/publicmenu6" component={PublicMenu6} />
      <Route path="/publicmenu7" component={PublicMenu7} />
      <Route path="/publicmenu8" component={PublicMenu8} />
      <Route path="/publicmenu9" component={PublicMenu9} />
      <Route path="/publicmenu10" component={PublicMenu10} />
      <Route path="/publicmenu11" component={PublicMenu11} /> */}

    </Switch>
    </Router>
    <Footer />
    </div>

    


    

    
  );
}

export default App;
