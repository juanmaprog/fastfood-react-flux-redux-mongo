import React, { Component } from "react";
// import axios from "axios";

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

      setTimeout(() => {
        this.props.history.push("/singin");
      }, 1500);
    }
  
  render() {
    return (
        <div className="init">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Te llamas</label>
              <input onChange={this.handleChange} type="name" className="form-control" id="name"></input>
            </div>

            <div className="form-group">
              <label htmlFor="username">Te apellidas</label>
              <input onChange={this.handleChange} type="username" className="form-control" id="username"></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Tu correo electrónico es</label>
              <input onChange={this.handleChange} type="email" className="form-control" id="email"></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">Tu contraseña es</label>
              <input onChange={this.handleChange} type="password" className="form-control" id="password"></input>
            </div>

            <button type="submit" className="btn btn-primary">Acceder</button>

          </form>
        </div>
    )
  }
}