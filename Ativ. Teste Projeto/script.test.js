const { default: expect } = require('expect');
const { VerificarAno } = require('./script');

it('Ano valido - homem', () => {
    expect(VerificarAno(2000, 'homem')).toBe('Detectamos um(a) homem com 24 anos de idade');
})

it('Ano valido - mulher', () => {
    expect(VerificarAno(2000, 'mulher')).toBe('Detectamos um(a) mulher com 24 anos de idade');
})

it('Ano inválido - ano a frente', () => {
    expect(VerificarAno(2025, 'homem')).toBe('Valor inválido, o ano está a frente ou corresponde o atual');
})

it('Ano inválido - ano atual', () => {
    expect(VerificarAno(2024, 'homem')).toBe('Valor inválido, o ano está a frente ou corresponde o atual');
})

it('Ano inválido - ano vazio', () => {
    expect(VerificarAno("", 'homem')).toBe('Digite um ano válido');
})

it('Ano inválido - ano negativo', () => {
    expect(VerificarAno(-2025, 'homem')).toBe('Valor inválido, o ano não pode ser negativo');
})

it('Ano inválido - ano com valor não inteiro', () => {
    expect(VerificarAno(20.25, 'homem')).toBe('Valor inválido, o ano não pode possuir valor não inteiro');
})

it('Ano valido - Criança homem', () => {
    expect(VerificarAno(2022, 'homem')).toBe('Detectamos um(a) homem com 2 anos de idade');
})

it('Ano valido - Criança mulher ', () => {
    expect(VerificarAno(2022, 'mulher')).toBe('Detectamos um(a) mulher com 2 anos de idade');
})

it('Ano valido - Adolescente homem', () => {
    expect(VerificarAno(2003, 'homem')).toBe('Detectamos um(a) homem com 21 anos de idade');
})

it('Ano valido - Adolescente mulher ', () => {
    expect(VerificarAno(2003, 'mulher')).toBe('Detectamos um(a) mulher com 21 anos de idade');
})

it('Ano valido - Adulto homem', () => {
    expect(VerificarAno(1968, 'homem')).toBe('Detectamos um(a) homem com 56 anos de idade');
})

it('Ano valido - Adulto mulher ', () => {
    expect(VerificarAno(1968, 'mulher')).toBe('Detectamos um(a) mulher com 56 anos de idade');
})

it('Ano valido - Velho homem', () => {
    expect(VerificarAno(1958, 'homem')).toBe('Detectamos um(a) homem com 66 anos de idade');
})

it('Ano valido - Velho mulher ', () => {
    expect(VerificarAno(1958, 'mulher')).toBe('Detectamos um(a) mulher com 66 anos de idade');
})

it('Ano valido - Valor limite ', () => {
    expect(VerificarAno(1700, 'mulher')).toBe('Idade limite estourado');
})

it('Ano valido - Letra maiúscula ', () => {
    expect(VerificarAno(2000, 'MUlher')).toBe('Detectamos um(a) mulher com 24 anos de idade');
})

it('Nome invalido de genero', () => {
    expect(VerificarAno(2000, 'macho')).toBe('Nome para genero invalido, utilize apenas homem ou mulher');
})
