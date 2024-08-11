const { default: expect } = require('expect');
const {verificarSenha, verificarTamanho, verificarSimbolo} = require('./equivalencia');
//1
it("Verificar se primeiro digito tem letra - valido", () => {
    expect(verificarSenha("a12345")).toBe(true);
})
//4
it("Verificar se primeiro digito tem letra - invalido", () => {
    expect(verificarSenha("1abc")).toBe(false);
})
//2
it("Verificar se primeiro caractere e tem letra no inicio - valido", () => {
    expect(verificarSenha("Abc123")).toBe(true);
})

it("Verificar tamanho de senha - valido", () => {
    expect(verificarTamanho("user1")).toBe(true);
})

it("Verificar tamanho de senha - invalido(+6 caracteres)", () => {
    expect(verificarTamanho("a123456")).toBe(false);
})
//3
it("Verificar se contem caractere especial", () => {
    expect(verificarSimbolo("cont*1")).toBe(false);
})
