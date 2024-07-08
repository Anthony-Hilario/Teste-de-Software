function numPrimo(numero){
    //Todo numero par que nao seja 2
    if(numero % 2 == 0 && numero != 2) return "O numero nao eh primo";
    //Numeros menores ou iguais a 1
    if(numero <= 1) return "O numero nao eh primo";
    //Verificando se o tipo de dado inserido eh numero.
    if(typeof numero != 'number') return "Valor invalido, digite um numero";

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
          return "O numero nao eh primo";
        }
    }
    return "O numero eh primo";
}

module.exports = {numPrimo};

console.log(numPrimo(21));