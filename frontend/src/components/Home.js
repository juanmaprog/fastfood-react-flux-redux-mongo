import React, { Component } from "react";
import "./Home.css";


export default class Home extends Component {
    render() {
        return (
          <div>
            <h1 className="titulo_home">bienvenido a nuestro restaurante</h1>
            <div className="main">
              <div className="left">
                <h2>carta</h2>
                <p></p>
              </div>
              <div className="right">
                <h2>ofertas</h2>
                <p></p>
              </div>
            </div>
            <h1>LAS MEJORES HAMBURGUESAS PARA LOS MEJORES VEGETARIOS</h1>
            <button>PIDE AHORA</button>
            <BackgroundImagePage/>
          </div>
        )
      }
}
