import React, { Component, useState } from "react";
// import MenuPollo from './MenuPollo';

class MenuContent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <div class="img_gal">
          <a href="#">
            <img></img>
            <h4>{this.props.image}</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default MenuContent;
