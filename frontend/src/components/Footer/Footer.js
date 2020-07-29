import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer class="foot">
        <div class="sub_footer">
          <div class="text_subfooter">
            <p>
              TM & 2020 Burger King Corporation. Todos los derechos reservados
            </p>
          </div>
          <div class="text_subfooter">
            <p>También puedes pedir por teléfono: 91 1933933 / 902 411 114</p>
          </div>
          <div class="text_subfooter">
            <a
              class="icons"
              href="https://twitter.com/burgerking?lang=es"
              target="blank"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              class="icons"
              href="https://www.youtube.com/user/Burgerkingespana"
              target="blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              class="icons"
              href="https://www.instagram.com/burgerking_es/?hl=es"
              target="blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="icons"
              href="https://www.facebook.com/burgerkingespana"
              target="blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
