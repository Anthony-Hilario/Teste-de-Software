package Teste;

public class Triangulo {
        int lado1, lado2, lado3;
        
        public Triangulo(){
        }
        
        public Triangulo(int lado1,int lado2,int lado3){
            this.lado1 = lado1;
            this.lado2 = lado2;
            this.lado3 = lado3;
        }
        
        public String verificaInteiro(double lado1,double lado2,double lado3){
            if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
                return "Valores invalidos, so sao permitidos valores inteiros";
            } else {
                if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                    return "Seu triângulo é Escaleno";
                } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                    return "Seu triângulo é Isósceles";
                } else if (lado1 == lado2 && lado3 == lado1) {
                    return "Seu triângulo é Equilátero";
                } else {
                    return "Não tem esse tipo de triângulo";
                }
            }
        }

        public String verificaEquilatero(int lado1,int lado2,int lado3){
            //EQUILATERO: todos os lados iguais
            if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
                return "O triangulo e EQUILATERO";
            } else {
                return "Nao e triangulo Equilatero";
            }
        }
        
        public String verificaIsoceles(int lado1,int lado2,int lado3){
            //ISOCELES: tem apenas dois lados iguais, e tem dois angulos iguais e um menor que eles.
            //Obs: o valor da soma dos dois lados iguais nao pode ser MENOR que o valor do lado diferente.
            if ((lado1 == lado2 && lado1 != lado3) && (lado2 == lado1 && lado2 != lado3) && (lado3 != lado1 && lado3 != lado2)){
                if((lado1 + lado2 <= lado3) || (lado2 + lado3 <= lado1) || (lado1 + lado3 <= lado2)){
                    return("Valor 1,2 ou 3 invalido, um triangulo escaleno nao pode ter o lado diferente maior que seus valores iguais");
                } else {
                    return("O triangulo e ISOCELES");
                }
            }
            return null;
        }

        public String SomaDoisIgualTerceiro(int lado1, int lado2, int lado3){
            if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3 && lado1 == 0) {
                return "Todos os lados são iguais a zero";
            } else if ((lado1 > 0 && lado2 > 0 && lado3 > 0) && (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2)) {
                if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
                    return "algum dos lados possui um valor não inteiro";
                } else {
                    if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                        return "Seu triângulo é Escaleno";
                    } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                        return "Seu triângulo é Isósceles";
                    } else if (lado1 == lado2 && lado3 == lado1) {
                        return "Seu triângulo é Equilátero";
                    } else {
                        return "Não tem esse tipo de triângulo";
                    }
                }
            } else if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
                return "Existe um lado com valor zero";
            } else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
                return "Existe um lado com valor negativo";
            } else if (lado1 + lado2 == lado3 || lado2 + lado3 == lado1 || lado3 + lado1 == lado2) {
                return "A soma de dois lados é igual ao terceiro lado";
            } else if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
                return "A soma de dois lados é menor que o terceiro lado";
            } else {
                return "Outras situações";
            }
        }
        
        public String verificaEscaleno(int lado1,int lado2,int lado3){
            //ESCALENO: nao tem lados iguais
            if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
                return "Um dos lados esta igual ao outro";
            }

            if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
                if ((lado1 > 0 && lado2 > 0 && lado3 > 0) && (lado1 + lado2 >= lado3 && lado2 + lado3 >= lado1 && lado3 + lado1 >= lado2)) {
                    return "Nao e possivel fazer um triangulo com esses valores, a soma de dois valores da o mesmo que o outro";
                } else{
                    return "O triangulo e ESCALENO";
                }
            }
            return null;
        }

        public String permutacao1(int lado1, int lado2, int lado3){
            if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                return "Seu triangulo e Escaleno";
            } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                return "Seu triangulo e Isosceles";
            } else if (lado1 == lado2 && lado3 == lado1) {
                return "Seu triangulo e Equilatero";
            } else {
                return "Nao tem esse tipo de triangulo";
            }
        }
        
        public String valorZero(int lado1,int lado2,int lado3){
            if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3 && lado1 == 0) {
                return "Todos os lados são iguais a zero";
            } else if ((lado1 > 0 && lado2 > 0 && lado3 > 0) && (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2)) {
                if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
                    return "algum dos lados possui um valor não inteiro";
                } else {
                    if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                        return "Seu triângulo é Escaleno";
                    } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                        return "Seu triângulo é Isósceles";
                    } else if (lado1 == lado2 && lado3 == lado1) {
                        return "Seu triângulo é Equilátero";
                    } else {
                        return "Não tem esse tipo de triângulo";
                    }
                }
            } else if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
                return "Triangulo invalido, alguns dos lados sao zero";
            } else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
                return "Existe um lado com valor negativo";
            } else if (lado1 + lado2 == lado3 || lado2 + lado3 == lado1 || lado3 + lado1 == lado2) {
                return "A soma de dois lados é igual ao terceiro lado";
            } else if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
                return "A soma de dois lados é menor que o terceiro lado";
            } else {
                return "Outras situações";
            }
        }

        public String valorNegativo(int lado1,int lado2,int lado3){
            if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3 && lado1 == 0) {
                return "Todos os lados sao iguais a zero";
            } else if ((lado1 > 0 && lado2 > 0 && lado3 > 0) && (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2)) {
                if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
                    return "algum dos lados possui um valor nao inteiro";
                } else {
                    if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                        return "Seu triangulo e Escaleno";
                    } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                        return "Seu triangulo e Isósceles";
                    } else if (lado1 == lado2 && lado3 == lado1) {
                        return "Seu triangulo e Equilátero";
                    } else {
                        return "Nao tem esse tipo de triangulo";
                    }
                }
            } else if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
                return "Existe um lado com valor zero";
            } else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
                return "Um dos lados tem valor Negativo";
            } else if (lado1 + lado2 == lado3 || lado2 + lado3 == lado1 || lado3 + lado1 == lado2) {
                return "A soma de dois lados e igual ao terceiro lado";
            } else if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
                return "A soma de dois lados e menor que o terceiro lado";
            } else {
                return "Outras situacoes";
            }
        }

        public String doisValores(Integer lado1, Integer lado2, Integer lado3){
            if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3 && lado1 == 0) {
                return "Todos os lados são iguais a zero";
            } else if ((lado1 > 0 && lado2 > 0 && lado3 > 0) && (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2)) {
                if (lado1 % 1 != 0 || lado2 % 1 != 0 || lado3 % 1 != 0) {
                    return "algum dos lados possui um valor não inteiro";
                } else {
                    if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
                        return "Seu triângulo é Escaleno";
                    } else if ((lado1 == lado2 && lado3 != lado1) || (lado1 == lado3 && lado2 != lado1) || (lado2 == lado3 && lado1 != lado2)) {
                        return "Seu triângulo é Isósceles";
                    } else if (lado1 == lado2 && lado3 == lado1) {
                        return "Seu triângulo é Equilátero";
                    } else {
                        return "Não tem esse tipo de triângulo";
                    }
                }
            } else if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
                return "Existe um lado com valor zero";
            } else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
                return "Existe um lado com valor negativo";
            } else if (lado1 + lado2 == lado3 || lado2 + lado3 == lado1 || lado3 + lado1 == lado2) {
                return "A soma de dois lados é igual ao terceiro lado";
            } else if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado3 + lado1 < lado2) {
                return "A soma de dois lados é menor que o terceiro lado";
            } else if (lado1 == null || lado2 == null || lado3 == null) {
                return "Um dos lados nao foi declarado";
            } else {
                return "Outras situações";
            }
        }
    
}
