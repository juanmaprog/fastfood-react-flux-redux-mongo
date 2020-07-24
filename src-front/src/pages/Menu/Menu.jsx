import React, { Component } from "react";
import './Menu.css';
import Imagen1 from "./imagen1.png";




var sectionStyle = {
    color: "#85332d"
};




class Menu extends Component {
    render() {
        return (
            <div class="main" activeKey="/menu">
                <div class="titulo">
                    <h1 class="titulo_carta">Hola, ¿qué quieres comer hoy? </h1>
                </div>
                <div class="galeria_carta">
                    <div class="img_gal">
                        <a href="#"><img src={Imagen1} alt=""></img><h4 style={ sectionStyle }>novedades</h4></a>
                    </div>
                    {/* <div class="img_gal">
                        <a href="#"><img src="img/imagen2.png" alt=""></img><h4 style="color: #AC162C;">menú parrilla</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen3.png" alt=""></img><h4 style="color: #AA532E;">menú pollo</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen4.png" alt=""></img><h4 style="color: #9063CD;">king jr. meal</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen5.png" alt=""></img><h4 style="color: #F7A800;">entrantes y snacks</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen6.png" alt=""></img><h4 style="color: #EE7700;">hamburguesas</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img//imagen7.png" alt=""></img><h4 style="color: #0071CE;">postres</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen8.png" alt=""></img><h4 style="color: #E2231A;">salsas</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen9.png" alt=""></img><h4 style="color: #63890A;">king delight</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen10.png" alt=""></img><h4 style="color: #A3007D;">bebidas y cafés</h4></a>
                    </div>
                    <div class="img_gal">
                        <a href="#"><img src="img/imagen11.png" alt=""></img><h4 style="color: #A4D55D;">sin gluten</h4></a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Menu;