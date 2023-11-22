import React from "react";
import CalculadoraService from "./Calculadora.service";

describe('Teste do CalculadoraService', () => {

    const [Calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();

    it('Deve garantir que 1 + 4 = 5', () => {
        let soma = Calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    })
    it('Deve garantir que 1 - 4 = -3', () => {
        let subtracao = Calcular(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    })
    it('Deve garantir que 1 * 4 = 4', () => {
        let multiplicacao = Calcular(1, 4, MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    })
    it('Deve garantir que 1 / 4 = 0.25', () => {
        let divisao = Calcular(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25)
    })
    it('Deve retornar 0 para resultado inválido', ()=>{
        let operacaoIvalida = Calcular(1,4, '%');
        expect(operacaoIvalida).toEqual(0)
    })
});

