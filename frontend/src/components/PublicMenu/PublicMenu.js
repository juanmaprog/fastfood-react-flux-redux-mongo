import React, { Component } from "react";
import "./PublicMenu.css";



export default class PublicMenu extends Component {

    render() {
        return (
            <div class="main">
                <div class="container">
                    <div class="left_is">
                        <div id="img_left1"></div>
                        <h2 class="titulo_menu">MENÚ DUO CHEDDAR BACON</h2>
                        <p class="subtitulo_menu">Es una realidad, la mejor combinación ha llegado. Con nuestra jugosa carne a la parrilla, doble de queso cheddar y doble de bacon. Acompañada de tomate fresco, salsa cheddar y cebolla crujiente, ¡hasta el pan lleva bacon! Es el gocheo hecho hamburguesa.</p>
                        <button>iniciar pedido</button>
                    </div>
                    <div class="right_is">
                        <div class="social_info">
                            <div class="left_info">
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/ico-ingredients-bacon.svg" alt=""></img>
                                    <span class="info_social">Bacon</span>
                                </div>
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/ico-ingredients-carne-1.svg" alt=""></img>
                                    <span class="info_social">Carne whopper®</span>
                                </div>
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/ico-ingredients-cebolla-frita.svg" alt=""></img>
                                    <span class="info_social">Cebolla frita</span>
                                </div>
                            </div>
                            <div class="right_info">
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/ico-ingredients-tomate.svg" alt=""></img>
                                    <span class="info_social">Tomate</span>
                                </div>
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/ico-ingredients-queso.svg" alt=""></img>
                                    <span class="info_social">Queso</span>
                                </div>
                                <div class="social">
                                    <img src="https://gps.burgerkingencasa.es/images/ingredients/1556118774790_ico-ingredients-generic-sauce.svg" alt=""></img>
                                    <span class="info_social">Salsa Cheddar</span>
                                </div>
                            </div>
                        </div>
                        <div class="botones">
                            <button>VALOR NUTRICIONAL</button>
                            <button>ALÉRGENOS</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}