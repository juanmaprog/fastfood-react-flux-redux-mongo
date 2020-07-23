import React from 'react';
import './login.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component{
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abiert:  this.state.abierto});
    }


  render(){
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
          
        </ModalFooter>
      </Modal>
      </>
    )
  }   
}
export default Login;
