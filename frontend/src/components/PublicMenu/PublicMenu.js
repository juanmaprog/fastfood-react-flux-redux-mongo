import React, { Component } from "react";
import "./PublicMenu.css";

export default class PublicMenu extends Component {




  render() {
    return (
      <div class="main_public">
        <div class="container_public">
          <div class="left_is">
            <div id="img_left1"></div>
          </div>
          <div class="right_is">
            <h2 class="titulo_menu">MENÚ DUO CHEDDAR BACON</h2>
            <p class="subtitulo_menu">
            Es una realidad, la mejor combinación ha llegado. Con nuestra jugosa carne a la parrilla, doble de queso cheddar y doble de bacon. Acompañada de tomate fresco, salsa cheddar y cebolla crujiente, ¡hasta el pan lleva bacon! Es el gocheo hecho hamburguesa.
            </p>
            <button >añadir</button>
          </div>
        </div>
      </div>
    );
  }
}
