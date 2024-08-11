function VerificarAno(ano, genre) {
    let date = new Date();
    let anoAtual = date.getFullYear();
    let anoNascimento = ano;
    let idadePessoa = anoAtual - anoNascimento;
    let genero = genre;
    let minusc = genero.toLowerCase();
    
    if(typeof genero == 'string'){
        genero = minusc;
    }
    if (anoNascimento == '') {
        let resposta = 'Digite um ano válido';
        return resposta;
    } else if(anoNascimento >= anoAtual){
        let resposta = 'Valor inválido, o ano está a frente ou corresponde o atual';
        return resposta;
    } else if(anoNascimento < 0){
        let resposta = 'Valor inválido, o ano não pode ser negativo';
        return resposta;
    } else if(anoNascimento % 1 !== 0) {
        let resposta = 'Valor inválido, o ano não pode possuir valor não inteiro';
        return resposta;
    }
    else {
        if (genero == 'homem') {

            if (idadePessoa > 0 && idadePessoa < 12) {
                let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                return resposta;
            } else if (idadePessoa < 21) {
                let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                return resposta;
            } else if (idadePessoa < 60) {
                let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                return resposta;
            } else if (idadePessoa <= 120) {
                let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                return resposta;
            } else {
                let resposta = `Idade limite estourado`;
                return resposta;
            }
        }
        else {
            if (genero == 'mulher') {

                if (idadePessoa > 0 && idadePessoa < 12) {
                    let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                    return resposta;
                } else if (idadePessoa < 21) {
                    let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                    return resposta;
                } else if (idadePessoa < 60) {
                    let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                    return resposta;
                } else if (idadePessoa <= 120) {
                    let resposta = `Detectamos um(a) ${genero} com ${idadePessoa} anos de idade`;
                    return resposta;
                } else {
                    let resposta = `Idade limite estourado`;
                    return resposta;
                }
            }
        }
    }

}

module.exports = {VerificarAno};