// import React from 'react';
import Calculadora from './Calculadora';
import { render, fireEvent } from '@testing-library/react';
// import ReactDOM from 'react-dom'
// import '@testing-library/jest-dom'

describe('Calculadora', ()=>{

  it('Deve renderizar sem erros', () => {
    render(<Calculadora />);
    const linkElement = document.querySelector('.container');
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Deve limpar o campo de texto', ()=>{
    const {getByText, getByTestId} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0')

  });

  it('Deve somar 2 + 3 e obter 5', ()=>{
    const {getByText, getByTestId} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });

  it('Deve subtrair 3 - 2 e obter 1', ()=>{
    const {getByText, getByTestId} = render(<Calculadora />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('1');
  });

  it('Deve multiplicar 2 * 3 e obter 6', ()=>{
    const {getByText, getByTestId} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });

  it('Deve dividir 6 / 2 e obter 3', ()=>{
    const {getByText, getByTestId} = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3')
  });

});


