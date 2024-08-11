function verificarSenha(senha){
    if(typeof senha == 'string'){
        let primeiroChar = senha.charAt(0); //pode ser substituido por senha[0].
        let valValido = /^[a-zA-Z]$/; //verificar se contem as letras no limite estipulado, substitui uma lista de letras.

        if(senha.length == 0) return false;

        let result = valValido.test(primeiroChar);
        return result;
    }
    else return "tipo de senha invalido";
}

function verificarTamanho(senha){
    if(typeof senha == 'string'){
        if(senha.length < 1 || senha.length > 6) return false;
        else return true;
    }
    else return "tipo de senha invalido";
}

function verificarSimbolo(senha){
    let valido = /^[a-zA-Z]$/;
    let result = valido.test(senha);
    
    return result;
}

module.exports = {verificarSenha, verificarTamanho, verificarSimbolo};

let senha = "Ola";
let char1 = senha[0];
console.log(char1);