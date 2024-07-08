const {definirTriangulo} = require('../Triangulo/triangulo');

it("Teste triangulo equilatero", () => {
    expect(definirTriangulo(3,3,3)).toBe("O triangulo e EQUILATERO")
})

it("Teste triangulo isoceles", () => {
    expect(definirTriangulo(3,3,1)).toBe("O triangulo e ISOCELES")
})

it("Teste triangulo escaleno", () => {
    expect(definirTriangulo(1,2,3)).toBe("O triangulo e ESCALENO")
})






it("Teste de valor igual a zero", () => {
    expect(definirTriangulo(0,1,1)).toBe("Valor(es) invalido(s), um triangulo nao pode ter valores negativos ou 0.")
})

it("Teste valores inteiros", () => {
    expect(definirTriangulo(1.5,3.3,5.2)).toBe("Valores invalidos, so sao permitidos valores inteiros.")
})