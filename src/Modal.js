
import React, { Component} from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hola extends Component{
    state ={
      abierto: false,
    }
    abrirModal = ()=>{
      this.setState({abierto: !this.state.abierto});
    
    }
    
    render(){
    
    return(
    <>
    
        <Button color='succsess' onClick={this.abrirModal}>Mostrar Modal</Button>
    
      
    <Modal isOpen={this.state.abierto}>
      <ModalHeader>
        Iniciar sesion
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Usuario</Label>
          <Input type='text'></Input>
          <Label>Constraseña</Label>
          <Input type='text'></Input>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color='primary'>Iniciar secion</Button>
        <Button color='secundary' onClick={this.abrirModal}>Cerrar</Button>
      </ModalFooter>
    </Modal>
    </>
    );
    }
    }
    export default Hola;