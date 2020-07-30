import React, { Component } from "react";
import "./PublicMenu3.css";



export default class PublicMenu3 extends Component {
    render() {
      return (
        <div class="main_public">
          <div class="container_public">
            <div class="left_is">
              <div id="img_left3"></div>
            </div>
            <div class="right_is">
              <h2 class="titulo_menu">MENÚ CHICKEN TENDERCRISP</h2>
              <p class="subtitulo_menu">
              100% pechuga de pollo empanada como sólo Burger King sabe hacerlo. Lechuga fresca recién traída de la huerta, tomates cortados en el momento y una capa de mayonesa para sumarle aún más sabor dentro de pan crujiente, repetirás seguro…              </p>
              <button>pedir</button>
            </div>
          </div>
        </div>
      );
    }
  }