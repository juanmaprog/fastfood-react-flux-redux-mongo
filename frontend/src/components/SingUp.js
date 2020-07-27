import React, { Component } from "react";
import axios from "axios";


export default class SingUp extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000/api/users");
    this.setState({ users: res.data });
    console.log(this.state.users);
  }

  render() {
    return (
      
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-3">CREAR USUARIO</div>
            <div className="card-body p-3">CREAR USUARIO</div>
            <div className="card-body p-3">CREAR USUARIO</div>
            <div className="card-body p-3">CREAR USUARIO</div>
            
          </div>
        </div>        
      
    );
  }
}
