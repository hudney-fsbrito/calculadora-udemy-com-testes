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

  //Adiciona número na variável e concatena
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

  //Define a operção ao clicar pela primera vez.
  //Executa a função Calcula() ao clicar pela segunda vez e Define a próxima operaçao.
  function DefinirOperacao(op) {

    if(operacao === null){
      setOperacao(op)
      return;
    }
    if (numero2 !== null) {
      const resultado =  Calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setNumero1(resultado.toString())
      setNumero2(null)
      setOperacao(op)
      setTxtNumero(resultado.toString())
      
    }

  }

  //Faz a função de igual
  function acaoCalcular() {
    if(numero2 === null){
      return;
    }
    const resultado =  Calcular(parseFloat(numero1), parseFloat(numero2), operacao)
    setTxtNumero(resultado.toString())
  }

  //Faz a função de limpar a tela e os dados
  function limpar() {
    setTxtNumero('0')
    setNumero1('0')
    setNumero2(null)
    setOperacao(null)
  }

  return (
    <div
      className='container'
      style={{
        background: 'transparent !important',
        backgroundColor: '#031120',
        padding: '5px',
        paddingTop: '20px',
        width: '300px',
        height: '350px',
        borderRadius: '25px',
        boxShadow: '10px 10px 20px 10px gray'
      }}>

      <Container>
        <Row>
          <Col xs="3">
            <Button 
            variant='danger' 
            onClick={limpar}
            style={{
              boxShadow:'inset 0px 0px 10px #700505'
            }}
            >C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-end"
              readOnly='readonly'
              value={txtNumero}
              data-testid="txtNumeros"
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
            <Button variant="light" onClick={() => { DefinirOperacao(DIVISAO) }}>/</Button>
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
            <Button variant="light" onClick={() => { DefinirOperacao(MULTIPLICACAO) }}>*</Button>
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
            <Button variant="light" onClick={() => { DefinirOperacao(SUBTRACAO) }}>-</Button>
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
            <Button variant="success" onClick={acaoCalcular}>=</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => { DefinirOperacao(SOMA) }}>+</Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Calculadora;
