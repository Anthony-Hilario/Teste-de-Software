function VerificarEquilatero(lado1, lado2, lado3) {
    if(typeof lado1 == 'number' && typeof lado2 == 'number' && typeof lado3 == 'number') {
        if (lado1 === lado2 && lado3 === lado1) {
            return true;
        } else return false;
    } else return "Valor de input de algum dos lados inválido";
}

function VerificarIsoceles(lado1, lado2, lado3) {
    if(typeof lado1 == 'number' && typeof lado2 == 'number' && typeof lado3 == 'number') {
        if ((lado1 === lado2 && lado3 !== lado1) || (lado1 === lado3 && lado2 !== lado1) || (lado2 === lado3 && lado1 !== lado2)) {
            return true;
        } else return false;
    } else return "Valor de input de algum dos lados inválido";
}

function VerificarEscaleno(lado1, lado2, lado3) {
    if(typeof lado1 == 'number' && typeof lado2 == 'number' && typeof lado3 == 'number') {
        if (lado1 !== lado2 && lado1 !== lado3 && lado3 !== lado2) {
            return true;
        } else return false;
    } else return "Valor de input de algum dos lados inválido";
}

function VerificarNumero(lado1, lado2, lado3) {
    let valido = /^\d+$/;
    let resultado = valido.test(lado1, lado2, lado3);
    return resultado;
}

function VerificarVazio(lado1, lado2, lado3) {
    if(lado1 == "" || lado2 == "" || lado3 == "") return true;
    else return false;
}

function ZeroOuNegativo(lado1,lado2,lado3) {
    if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0) return true;
    else return false;
}

function VerificarInteiro(lado1,lado2,lado3) {
    if (lado1 % 1 !== 0 || lado2 % 1 !== 0  || lado3 % 1 !== 0 ){
        return false;
    } else return true;
}

function SomaLadosIguais(lado1,lado2,lado3) {
    if(lado1 + lado2 == lado3 || lado2 + lado3 == lado1 || lado1 + lado3 == lado2){
        return true;
    } else return false;
}

function LadosMenor(lado1,lado2,lado3) {
    if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
        return true;
    } else return false;
}

module.exports = {
    VerificarEquilatero, 
    VerificarIsoceles, 
    VerificarEscaleno, 
    VerificarNumero, 
    VerificarVazio, 
    ZeroOuNegativo,
    VerificarInteiro,
    SomaLadosIguais,
    LadosMenor,
};
