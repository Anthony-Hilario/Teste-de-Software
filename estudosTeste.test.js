const { default: expect } = require('expect');
const {verificarSenha, verificarLogin, emailComSenha} = require('./estudoTestes');

it('Senha e verificacao iguais', () => {
    expect(verificarSenha('123','123')).toBe("Senha valida");
})

it('Senha e verificacao diferentes', () => {
    expect(verificarSenha('123','123456')).toBe('Senha no campo de confirmacao esta diferente');
})

it('Login e senha validos', () => {
    expect(emailComSenha('jorge@ifrn.com','123','123')).toBe('Usuario, senha e confirmacao validos');
})

it('Login com confirmacao de senha invalido', () => {
    expect(emailComSenha('jorge@ifrn.com','123','1234')).toBe('Usuario, senha ou confirmacao invalidos');
})
