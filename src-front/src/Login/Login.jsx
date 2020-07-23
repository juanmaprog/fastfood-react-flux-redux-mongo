import React from 'react';
import './Login.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class Login extends React.Component{
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: this.state.abierto});
    }


  render(){

    const modalStyle={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
        <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>
        </div></div>
      


      <Modal isOpen={this.state.abierto}>
        <ModalHeader>
          Iniciar Sesión
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario"/>
          </FormGroup>
          <FormGroup>
            <label for="password">Contraseña</label>
            <input type="text" id="password"/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Iniciar Sesión</Button>
          <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }   
}
export default Login;
