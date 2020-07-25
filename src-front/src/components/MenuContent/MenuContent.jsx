import React, { Component } from "react";
import './MenuContent.css';





class MenuContent extends Component {
    constructor(props) {
        super(props);
        // No hagas esto!
        this.state = { color: props.color };
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