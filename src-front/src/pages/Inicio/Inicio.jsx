import React, { Component } from "react";
import './Inicio.css';
import Background  from "./port1.jpg";

 var sectionStyle = {
   width: "100%",
  height: "800px",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

class Inicio extends Component {
  render() {
    return (     
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Inicio;
