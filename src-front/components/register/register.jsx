import React from 'react';
import "./register.css";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            username:"",
            email:"",
            password:"",
            password2:"",
            address:"",
            phone:"",
            msgError:"",

            isRegistered: false,
        };
        //BINDEAMOS LA FUNCION AL ESTADO.
        this.createRegister = this.createRegister.bind(this);
    }

    //AQUI DESARROLLAMOS NUESTRAS FUNCIONES.
    handleChange = (ev) => {
        this.setState({
            [ev.target.name]:
                ev.target.type === "number" ? +ev.target.value : ev.target.value,
        });
    };

    async createRegister() {
        //1. CONTROL DE ERRORES.
        if(this.state.password !== this.state.password2) {
            this.setState({msgError: "No coinciden las contraseñas"});
            return;
        }

        if(this.state.username === "") {
            return;
        }
        //2. AQUI YA HEMOS COMPROBADO TODOS LOS ERRORES Y PROCEDEMOS A COMUNICAR CON EL BACK.

        try{
            //3. COMUNICACIÓN CON EL BACK Y NOS RESPONDE POSITIVAMENTE.
            let body = {
                username: this.state.username.trim(),
                email: this.state.email.trim(),
                password: this.state.password,
                address: this.state.address,
                phone: this.state.phone.trim(),
            };
            this.setState({isRegistered: true}, () => {
                //4. REDIRECCION... SALINDO DE AQUI.
                setTimeout(() => {
                    this.props.history.push("/");
                }, 2000);
            });
        } catch (err) {
            if (err.response) {
                if(err.response.data) {
                    this.muestraError("Error durante el registro");
                }
                return;
            }
            console.log(err);
        }
    }

    componenetDidMount() {
        console.log("El componente se ha montado");
    }

    componentDidUpdate(){

    }

    render() {
        const isRegistered = this.state.isRegistered;

        if (isRegistered) {
            return (
                <div>
                    <img className = "spinner" src = "" alt = ""></img>
                </div>
            );
        }else {
            return (
                <div className = "containerRegister">
                    <div className = "regLeft">
                        <input
                            className="inputReg"
                            type="text"
                            placeholder="Nombre de usuario"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        ></input>

                        <input
                            className="inputReg"
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        ></input>

                        <input
                            className="inputReg"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        ></input>

                        <span>{this.state.msgError}</span>

                        <input
                            className="inputReg"
                            type="password"
                            placeholder="Repite password"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.handleChange}
                        ></input>

                        <button onClick={this.createRegister}>REGISTER</button>
                    </div>

                    <div className = "regRight">
                        <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    </div>

                </div>
            );
        }
    }
}

export default Register;