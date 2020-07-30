import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation.js";
// import NotesList from "./components/NotesList.js";
// import CreateNote from "./components/CreateNote";
// import CreateUser from "./components/CreateUser";
// import Footer from "./components/Footer/Footer";
import Carta from "./components/Carta/Carta";
/* import Ofertas from "./components/Ofertas/Ofertas"; */
import PublicMenu from "./components/PublicMenu/PublicMenu.js";
import PublicMenu2 from "./components/PublicMenu2/PublicMenu2.js";
import PublicMenu3 from "./components/PublicMenu3/PublicMenu3.js"; 
import PublicMenu4 from "./components/PublicMenu4/PublicMenu4.js"; 
import PublicMenu5 from "./components/PublicMenu5/PublicMenu5.js"; 
import PublicMenu6 from "./components/PublicMenu6/PublicMenu6.js"; 
import PublicMenu7 from "./components/PublicMenu7/PublicMenu7.js"; 
import PublicMenu8 from "./components/PublicMenu8/PublicMenu8.js"; 
import PublicMenu9 from "./components/PublicMenu9/PublicMenu9.js"; 
import PublicMenu10 from "./components/PublicMenu10/PublicMenu10.js";  
import PublicMenu11 from "./components/PublicMenu11/PublicMenu11.js"; 
import Home from "./components/Home/Home";
import SingIn from "./components/SignIn";
import SingUp from "./components/SingUp";
import Carrito from "./components/Carrito/Carrito.js"


function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Hamb. ternera", precio: 3.5 },
    { id: 1, nombre: "Hamb. pollo", precio: 2.99 },
  ]);
  const [carrito, agregarProducto] = useState([]);
  
  

  return (
    
    <div>
    <Router>
    <Navigation />

      <Route path="/" exact component={Home} />
      <Route path="/carta" component={Carta} />
      <Route path="/carrito" component={Carrito} /> 
      <Route path="/singup" component={SingUp} />
      <Route path="/singin" component={SingIn} />
      <Route path="/publicmenu" component={PublicMenu} />
      <Route path="/publicmenu2" component={PublicMenu2} />
      <Route path="/publicmenu3" component={PublicMenu3} /> 
      <Route path="/publicmenu4" component={PublicMenu4} />
      <Route path="/publicmenu5" component={PublicMenu5} />
      <Route path="/publicmenu6" component={PublicMenu6} />
      <Route path="/publicmenu7" component={PublicMenu7} />
      <Route path="/publicmenu8" component={PublicMenu8} />
      <Route path="/publicmenu9" component={PublicMenu9} />
      <Route path="/publicmenu10" component={PublicMenu10} />
      <Route path="/publicmenu11" component={PublicMenu11} /> 


    </Router>
    {/* <Footer /> */}
    </div>

    


    

    
  );
}

export default App;
