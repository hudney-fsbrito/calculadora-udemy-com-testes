function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const MULTIPLICACAO = '*';
    const DIVISAO = '/';

    function Calcular(numero1, numero2, operacao) {
        let resultado
        switch (operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
                break;
        }
        return resultado;
    }

    function concatenarNumero(numeroAtual, numeroConcact) {

        //Se numeroAtual for igual 'null' ou '0', reinicia o valor;
        if(numeroAtual === '0' || numeroAtual === null){
            numeroAtual = '';
        }
        //Se numeroConcat for '.', retornar '0.'; Primerio dígito for '.' concatena 0 antes do ponto;
        if(numeroConcact === '.' && numeroAtual === ''){
            return '0.'
        }
        //Caso ponto digitado e já tiver, apenas retorna;
        if (numeroConcact === '.' && numeroAtual.indexOf('.') > -1) {
            return numeroAtual;            
        }
        
        return numeroAtual + numeroConcact;

    }

    return [
        Calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ];

}

export default CalculadoraService