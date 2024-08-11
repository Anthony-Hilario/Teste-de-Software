const { default: expect } = require("expect");
const {VerificarLogin} = require("./login");


it("Login correto", () => {
    expect(VerificarLogin("jorge@ifrn.com", 123)).toBe("Login efetuado com sucesso")
})

it("Email e senha errados", () => {
    expect(VerificarLogin("jorge1@ifrn.com", 1234)).toBe("Login ou senha incorretos")
})

it("Email errado", () => {
    expect(VerificarLogin("jorge1@ifrn.com", 123)).toBe("Login ou senha incorretos")
})

it("Senha errada", () => {
    expect(VerificarLogin("jorge@ifrn.com", 1234)).toBe("Login ou senha incorretos")
})

it("Login e senha em branco", () => {
    expect(VerificarLogin("", "")).toBe("Login ou senha em branco")
})

it("Login em branco", () => {
    expect(VerificarLogin("", 123)).toBe("Login ou senha em branco")
})

it("Senha em branco", () => {
    expect(VerificarLogin("jorge@ifrn.com", "")).toBe("Login ou senha em branco")
})

/*
No terminal do VsCode e no diretorio do projeto: 
npm install jest
npm i --save-dev jest
npm init -y
Feito tudo, mudar no arquivo "package.json", o valor da propriedade "test" para "jest"
*/
/* IT(informa o teste), EXPECT(o que quer enviar), TOBE(o que se espera) */
/* COMANDO PARA RODAR O TESTE: npm run test (test nao é o nome do arquivo) */