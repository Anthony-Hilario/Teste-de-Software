/*
//separar uma string em uma lista de caracteres
let string = "exemplo";
let array_de_caracteres = string.split('');
console.log(array_de_caracteres);

for(let i = 0; i < array_de_caracteres.length; i++){
    if(array_de_caracteres[i] == "e") {
        console.log("A lista possui a letra 'E'");
        break;
    }
}
*/
//-----------------------------------------------------

//confirmador de senha
function verificarSenha(senha, confirmSenha){
    if(typeof senha != 'string' || typeof confirmSenha != 'string') {
        return "Senha ou confirmacao invalida";
    }

    if(confirmSenha != senha) return "Senha no campo de confirmacao esta diferente";
    else return "Senha valida";
}

function verificarLogin(email){
    let user = 'jorge@ifrn.com';

    if(typeof email != 'string') return "Formato de email invalido";

    if(email != user) return "Usuario invalido";
    else return "Usuario valido";
}

function emailComSenha(email, senha, confirmarSenha){
    if(verificarLogin(email) == 'Usuario valido' 
    && verificarSenha(senha,confirmarSenha) == 'Senha valida') return "Usuario, senha e confirmacao validos";

    else return "Usuario, senha ou confirmacao invalidos";
}

module.exports = {verificarSenha, verificarLogin, emailComSenha};
