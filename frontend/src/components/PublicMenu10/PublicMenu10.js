import React, { Component } from "react";
import "./PublicMenu10.css";

export default class PublicMenu10 extends Component {
  render() {
    return (
      <div class="main_public">
        <div class="container_public">
          <div class="left_is">
            <div id="img_left10"></div>
          </div>
          <div class="right_is">
            <h2 class="titulo_menu">COCA-COLA</h2>
            <p class="subtitulo_menu">
            Nada como el sabor auténtico de una Coca-Cola bien fría para hacer el momento todavía más especial. Tómala muy fría con hielo y una rodaja de lima o limón para disfrutar al máximo de todo su sabor.
            </p>
            <button>pedir</button>
          </div>
        </div>
      </div>
    );
  }
}
