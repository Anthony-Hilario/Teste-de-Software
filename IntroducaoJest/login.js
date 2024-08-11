function VerificarLogin(login,senha) {
    if (login == "jorge@ifrn.com" && senha == 123) {
        return "Login efetuado com sucesso";
    } else if(login == "" || senha == "") {
        return "Login ou senha em branco";
    } else if(login != "jorge@ifrn.com" || senha != 123) {
        return "Login ou senha incorretos";
    } else {
        return "Falha ao realizar login";
    }
}

//login correto: jorge@ifrn.com
//senha correta: 123

//para ser usado por outro script, coloca as funcoes no modulo(objeto) abaixo
module.exports = {VerificarLogin};