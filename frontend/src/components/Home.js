import React, { Component } from "react";
import "./Home.css";
import BackgroundImagePage from "../components/BackgroundImagePage ";

export default class Home extends Component {
    render() {
        return (
          <div>
            <h1>LAS MEJORES HAMBURGUESAS PARA LOS MEJORES VEGETARIOS</h1>
            <button>PIDE AHORA</button>
            <BackgroundImagePage/>
          </div>
        )
      }
}
