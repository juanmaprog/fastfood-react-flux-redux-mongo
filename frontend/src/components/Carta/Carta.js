import React, { Component } from "react";
/* import Imagen from "./Imagen";
import HambTernera from "../assets/images/abstract-57e2d64b48_1280.jpg";
import HambPollo from "../assets/images/burgers-57e8d64a4a_12k80.jpg";  */
import "./Carta.css";
import { NavLink } from "react-router-dom";

export default class Carta extends Component {
  state = {
    imagen: "",
    descripcion: "",
    link: "",
    color: "",
    
  };

  render() {
    return (
      <div>
        <div className="main_carta">
          <div class="titulo">
            <h1 class="titulo_carta">Hola, ¿qué quieres comer hoy? </h1>
          </div>
          <div class="galeria_carta">
            <div id="ham_uno" className="img_gal">
              <NavLink to="/publicmenu" className="botones_carta">
              CHEDDAR BACON
              </NavLink>
            </div>
            <div id="ham_dos" className="img_gal">
              <NavLink to="/publicmenu2" className="botones_carta">
                WHOPPER
              </NavLink>
            </div>
            <div id="ham_tres" className="img_gal">
              <NavLink to="/publicmenu3" className="botones_carta">
                POLLO
              </NavLink>
            </div>
            <div id="ham_cuatro" className="img_gal">
              <NavLink to="/publicmenu4" className="botones_carta">
                KING JR. MEAL
              </NavLink>
            </div>
            <div id="ham_cinco" className="img_gal">
              <NavLink to="/publicmenu5" className="botones_carta">
                SNACKS
              </NavLink>
            </div>
            <div id="ham_seis" className="img_gal">
              <NavLink to="/publicmenu6" className="botones_carta">
                HAMBURGUESAS
              </NavLink>
            </div>
            <div id="ham_siete" className="img_gal">
              <NavLink to="/publicmenu7" className="botones_carta">
                POSTRES
              </NavLink>
            </div>
            <div id="ham_ocho" className="img_gal">
              <NavLink to="/publicmenu8" className="botones_carta">
                SALSAS
              </NavLink>
            </div>
            <div id="ham_nueve" className="img_gal">
              <NavLink to="/publicmenu9" className="botones_carta">
                REBEL WHOPPER
              </NavLink>
            </div>
            <div id="ham_diez" className="img_gal">
              <NavLink to="/publicmenu10" className="botones_carta">
                BEBIDAS
              </NavLink>
            </div>
            <div id="ham_once" className="img_gal">
              <NavLink to="/publicmenu11" className="botones_carta">
                SIN GLUTEN
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
