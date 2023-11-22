import React, { useState } from 'react';
import './Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from "./Calculadora.service";


function Calculadora() {

  const [Calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();

  const [txtNumero, setTxtNumero] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null)

  function AdicionarNumero(numero) {
    let resultado;
    if (operacao === null){
      resultado = concatenarNumero(numero1, numero)
      setNumero1(resultado)
    }else{
      resultado = concatenarNumero(numero2, numero)
      setNumero2(resultado)
    }
    setTxtNumero(resultado)
  }

  function DefinirOperacao(op) {

    if(operacao === null){
      setOperacao(op)
    }
    if (numero2 != null) {
      const resultado =  Calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setTxtNumero(resultado.toString())
      setNumero1(resultado)
      setNumero2(null)
      setOperacao(op)
      
    }

  }

  return (
    <div
      className='container'
      style={{
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        width: '400px',
        borderRadius: '4px'
      }}>

      <Container>
        <Row>
          <Col xs="3">
            <Button variant='danger'>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-end"
              readOnly='readonly'
              value={txtNumero}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("7") }}>7</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("8") }}>8</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("9") }}>9</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { DefinirOperacao("/") }}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("4") }}>4</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("5") }}>5</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("6") }}>6</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { DefinirOperacao("*") }}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("1") }}>1</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("2") }}>2</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("3") }}>3</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { DefinirOperacao("-") }}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero("0") }}>0</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { AdicionarNumero(".") }}>.</Button>
          </Col>
          <Col>
            <Button variant="success" >=</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { DefinirOperacao("+") }}>+</Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Calculadora;
