import React, { Component } from "react";
import './NavBar.css';
import logo from "./logo.jpg";

class NavBar extends Component {
  render() {
    return (     
        <div class="logo-navbar" activeKey="/home" >        
          <div id="logo">
            <img src={logo} alt="logo" />
          </div> 
          <div id="menu" >
            <ul>
              <li><a href="/home">INICIO</a></li>
              <li><a href="#">CARTA</a></li>
              <li><a href="/offers">OFERTAS</a></li>
              <li><a href="#">CALIDAD</a></li>
              <li><a href="#">CONTACTOS</a></li>
              <li class="item"><a href="#">INICIAR SESIÓN</a></li>
            </ul>
          </div>
        </div> 
    );
  }
}

export default NavBar;
