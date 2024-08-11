const { default: expect } = require('expect');
const {
    VerificarEquilatero,
    VerificarEscaleno,
    VerificarIsoceles,
    VerificarNumero,
    VerificarVazio,
    ZeroOuNegativo,
    VerificarInteiro,
    SomaLadosIguais,
    LadosMenor
} = require('./equivTriangulo');

it("Verificar Equilatero - true", () => {
    expect(VerificarEquilatero(10,10,10)).toBe(true);
})

it("Verificar Equilatero - false", () => {
    expect(VerificarEquilatero(10,10,2)).toBe(false);
})

it("Verificar Isoceles - true", () => {
    expect(VerificarIsoceles(10,10,4)).toBe(true);
})

it("Verificar Isoceles - false", () => {
    expect(VerificarIsoceles(10,10,10)).toBe(false);
})

it("Verificar Escaleno - true", () => {
    expect(VerificarEscaleno(10,6,4)).toBe(true);
})

it("Verificar Escaleno - false", () => {
    expect(VerificarEscaleno(10,6,6)).toBe(false);
})

it("Verificar numero - true", () => {
    expect(VerificarNumero(10,10,10)).toBe(true);
})

it("Verificar numero - false", () => {
    expect(VerificarNumero("f",10,10)).toBe(false);
})

it("Verificar vazio - true", () => {
    expect(VerificarVazio("",10,10)).toBe(true);
})

it("Verificar vazio - false", () => {
    expect(VerificarVazio(10,10,10)).toBe(false);
})

it("Verificar zero ou negativo(valor 0) - true", () => {
    expect(ZeroOuNegativo(0,10,10)).toBe(true);
})

it("Verificar zero ou negativo(valor negativo) - true", () => {
    expect(ZeroOuNegativo(-10,10,10)).toBe(true);
})

it("Verificar zero ou negativo - false", () => {
    expect(ZeroOuNegativo(10,10,10)).toBe(false);
})

it("Verificar Inteiro - true", () => {
    expect(VerificarInteiro(10,10,10)).toBe(true);
})

it("Verificar Inteiro - false", () => {
    expect(VerificarInteiro(10,10.2,10)).toBe(false);
})

it("Soma de lados resultando no valor do outro lado - true", () => {
    expect(SomaLadosIguais(5,5,10)).toBe(true);
})

it("Soma de lados resultando no valor do outro lado - false", () => {
    expect(SomaLadosIguais(5,10,10)).toBe(false);
})

it("Soma de dois lados serem menor que o outro - true", () => {
    expect(LadosMenor(4,2,8)).toBe(true);
})

it("Soma de dois lados serem menor que o outro - true", () => {
    expect(LadosMenor(4,2,6)).toBe(false);
})