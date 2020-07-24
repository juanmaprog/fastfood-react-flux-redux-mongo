import React, { Component } from "react";
import './MenuContent.css';





class MenuContent extends Component {
    constructor(props)  {
        props.name = "novedades"
    }


    render() {
        return (
           <div>
               <div class="img_gal">
                    <a href="#"><img></img><h4>{this.props.name}</h4></a>
                </div>
           </div>
        );
    }
}

export default MenuContent;