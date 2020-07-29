import React, { Component } from "react";
import { Link } from "react-router-dom";
const navbar = {backgroundColor: '#F16E10'};

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark " style={navbar}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fast Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carta">
                  CARTA
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <Link className="nav-link" to="/singup">
                  CREAR USUARIO
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/singin">
                  INICIAR SESIÓN
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  CERRAR SESIÓN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
