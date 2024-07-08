function definirTriangulo(ladoA, ladoB, ladoC) {
    const lado1 = ladoA;
    const lado2 = ladoB;
    const lado3 = ladoC;

    if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
        return("Valor(es) invalido(s), um triangulo nao pode ter valores negativos ou 0.");
    }
    if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
        return("Valores invalidos, so sao permitidos valores inteiros.")
    }

    /*
    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        console.log("Nao e possivel fazer um triangulo com esses valores, a soma de dois dos lados nao pode ser maior que o outro.");
        return;
    }
    */

    //EQUILATERO: todos os lados iguais
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        return("O triangulo e EQUILATERO");
    }
    //ISOCELES: tem apenas dois lados iguais, e tem dois angulos iguais e um menor que eles.
    //Obs: o valor da soma dos dois lados iguais nao pode ser MENOR que o valor do lado diferente.
    else if ((lado1 == lado2 && lado1 != lado3) && (lado2 == lado1 && lado2 != lado3) && (lado3 != lado1 && lado3 != lado2)){
        if((lado1 + lado2 <= lado3) || (lado2 + lado3 <= lado1) || (lado1 + lado3 <= lado2)){
            return("Valor 1,2 ou 3 invalido, um triangulo escaleno nao pode ter o lado diferente maior que seus valores iguais.");
        } else {
            return("O triangulo e ISOCELES");
        }
    }
    //ESCALENO: nao tem lados iguais
    else if ((lado1 != lado2 && lado1 != lado3) && (lado2 != lado1 && lado2 != lado3) && (lado3 != lado1 && lado3 != lado2)) {
        if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            return("Algum lado esta igual a outro");
        }
        if((lado1 + lado2 < lado3) || (lado2 + lado3 < lado1) || (lado1 + lado3 < lado2)){
            return("Nao e possivel fazer um triangulo com esses valores.");
        } else{
            return("O triangulo e ESCALENO");
        }
    }
}

module.exports = {definirTriangulo};