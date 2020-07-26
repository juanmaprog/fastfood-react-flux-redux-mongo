import React, { Component } from "react";
// import "./App.css";
// import Auth from "./pages/Auth";
// import Login from "./pages/Login/Login.jsx";
//import CeateAccount from "./pages/CeateAccount/CreateAccount.jsx";
/* import NavBar from "./pages/NavBar/NavBar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Menu from "./pages/Menu/Menu.jsx"; */
import MenuContent from "./components/MenuContent/MenuContent.jsx";
import ImgPollo from "./assets/imgMenu/imagen1.png";

class App extends Component {
  

  render() {
    return (
      <div>
        <div class="titulo">
            <h1 class="titulo_carta">Hola, ¿qué quieres comer hoy? </h1>
        </div> 
        <MenuContent description="Hamburguesa de Pollo" image = {ImgPollo}/>
        <MenuContent description="Hamburguesa a la Parrilla" />
        <MenuContent description="Bebidas" />
        <MenuContent description="Postres" />
        <MenuContent description="Snacks" />
        <MenuContent description="Happy meel" />
        <MenuContent description="Happy meel" />
        <MenuContent description="Happy meel" />
        <MenuContent description="Happy meel" />
        <MenuContent description="Happy meel" />
        <MenuContent description="Happy meel" />
      </div>
    );
  }
}

export default App;
