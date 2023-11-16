import React, { useState } from 'react';
import './Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {

  const [txtNumero, setTxtNumero] = useState('0')

  function AdicionarNumero(numero) {
    setTxtNumero(txtNumero + numero)
  }

  function DefinirOperacao(op) {
    setTxtNumero(op)
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
            <Button variant="light">.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
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
