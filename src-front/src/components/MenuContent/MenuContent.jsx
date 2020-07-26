import React, { Component, useState } from "react";
import "./MenuContent.css";
// import ImgPollo from "./img/imagen1.png";

class MenuContent extends React.Component {
  render() {
    return (
      <div>
        <div class="galeria_carta">
          <div class="img_gal">
            <a href="#">
              <img>{this.props.img}</img>
              <h4 class="subtitulo">{this.props.description}</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContent;
