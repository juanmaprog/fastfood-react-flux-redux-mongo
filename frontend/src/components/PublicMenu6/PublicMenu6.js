import React, { Component } from "react";
import "./PublicMenu6.css";

export default class PublicMenu6 extends Component {
  render() {
    return (
      <div class="main_public">
        <div class="container_public">
          <div class="left_is">
            <div id="img_left6"></div>
          </div>
          <div class="right_is">
            <h2 class="titulo_menu">BIG KING® XXL</h2>
            <p class="subtitulo_menu">
            Porque siempre se puede pedir más, creemos que esto te dejará satisfecho. Una hamburguesa que da la talla… XXL. Imagina 2 hamburguesas a la parrilla con triple de queso fundido sobre ellas, cebolla en rodajas, lechuga, pepinillos y salsa Big King®. No apta para gente impresionable.
            </p>
            <button>pedir</button>
          </div>
        </div>
      </div>
    );
  }
}
