import React, { Component } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";


export default class SingUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      username:"",
      email:"",
      password:"",
    }
  }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  
  render() {
    return (
        <div class="init">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Te llamas</label>
              <input type="name" class="form-control" id="exampleInputEmail1"></input>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Te apellidas</label>
              <input type="username" class="form-control" id="exampleInputPassword1"></input>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Tu correo electrónico es</label>
              <input type="email" class="form-control" id="exampleInputPassword1"></input>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Tu contraseña es</label>
              <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>

            {/* <button type="submit" class="btn btn-primary">Acceder</button> */}

            <NavLink to="/" className="button" id="buttonsubmit">Registrase</NavLink>

          </form>
        </div>
    )
  }
}
