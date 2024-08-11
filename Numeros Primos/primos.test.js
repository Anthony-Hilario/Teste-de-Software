const { default: expect } = require('expect');
const {numPrimo} = require('./numPrimos'); //instanciar como um object {}, senao sera interpretado como variavel

it("Numero primo", () => {
    expect(numPrimo(2)).toBe("O numero eh primo");
})

it("Numero nao primo", () => {
    expect(numPrimo(4)).toBe("O numero nao eh primo");
})

it("Input invalido", () => {
    expect(numPrimo("13")).toBe("Valor invalido, digite um numero");
})