import React, { Component } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";




export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="principal">
          <h1 className="titulo_home">bienvenido a nuestro restaurante</h1>
          <div className="main">
          <NavLink to="/carta" className="left">
              <h2>carta</h2>
              <p>
                Hecha un vistazo a nuestras espectaculares hamburguesas y
                realiza tu pedido
              </p>
          </NavLink>
            <div className="right">
              <h2>ofertas</h2>
              <p>
                Hecha un vistazo a nuestras espectaculares hamburguesas y
                realiza tu pedido
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
