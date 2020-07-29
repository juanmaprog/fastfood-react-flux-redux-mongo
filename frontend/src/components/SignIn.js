import React, { Component } from 'react';
import "./SignIn.css";

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
        this.props.history.push("/");
      }, 1500);
    }
    
    render() {
      return (
        <div className="init">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Correo electronico</label>
              <input onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input onChange={this.handleChange} type="password" className="form-control" id="password"></input>
            </div>
            
            <button type="submit" className="btn btn-primary">Acceder</button>

          </form>
        </div>
      );
    }
  }

// export default SignIn;