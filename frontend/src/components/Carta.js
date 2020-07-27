import React, { Component } from "react";
import Imagen from "./Imagen";
import HambTernera from "../assets/images/abstract-57e2d64b48_1280.jpg";

export default class Carta extends Component {
  state = {
    imagen: "",
    descripcion: "",
  };

  render() {
    return (
      <div>
      <div class="titulo">
            <h1 class="titulo_carta">Hola, ¿qué quieres comer hoy? </h1>
        </div> 
        <Imagen imagen={HambTernera} description="HAMBURGUESAS" />
        <Imagen imagen={HambTernera} />
      </div>
    );
  }
}
