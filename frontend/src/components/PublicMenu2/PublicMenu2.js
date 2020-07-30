import React, { Component } from "react";
import "./PublicMenu2.css";

export default class PublicMenu2 extends Component {
  render() {
    return (
      <div class="main_public">
        <div class="container_public">
          <div class="left_is">
            <div id="img_left2"></div>
          </div>
          <div class="right_is">
            <h2 class="titulo_menu">MENÚ WHOPPER</h2>
            <p class="subtitulo_menu">
            El Whopper® siempre será nuestro número uno. Jugosa carne de vacuno de estupenda calidad a la parrilla, tomate y lechuga fresca traídos de la huerta murciana, suave cebolla y sabroso pepinillo acompañado de mayonesa y kétchup. No olvides el esponjoso pan de semillas, que hacen en su conjunto una hamburguesa de sabor único y que reconocerías con los ojos cerrados.
            </p>
            <button>pedir</button>
          </div>
        </div>
      </div>
    );
  }
}
