import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const navbar = { backgroundColor: "#F07800" };


export default class Navigation extends Component {
  componentDidMount() {
    console.log("hola");
  }

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md fixed-top  text-uppercase text-left d-flex" style={navbar}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>Fast food</strong>
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          ></button>
          <div className="collapse navbar-collapse text-left" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="/">
                  INICIO
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/carta">
                  CARTA
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/ofertas">
                  OFERTAS
                </a>
              </li>
              <li className="nav-item" role="presentation"></li>
              <li className="nav-item" role="presentation"></li>
            </ul>
            {/* <button
              className="btn btn-success text-center border rounded shadow-sm mx-auto"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="bottom"
              type="button"
              title="7 ARTÍCULOS 12.99 €"
            >
              VER MI PEDIDO
            </button> */}
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="/singin">
                  INICIAR SESIÓN
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="/singup">
                  USUARIO
                </a>
              </li>
              <li>
                <div aria-expanded="false" className="img_cart"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
