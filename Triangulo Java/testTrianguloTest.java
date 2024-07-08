package Teste;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class testTrianguloTest {

    public testTrianguloTest() {
    }

    @Test
    public void verificarIsoceles(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 4;
        int lado2 = 4;
        int lado3 = 1;
        String res = triangulo.verificaIsoceles(lado1, lado2, lado3);
        assertEquals("O triangulo e ISOCELES", res);
    }

    @Test
    public void verificarEscaleno(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 14;
        int lado2 = 6;
        int lado3 = 7;
        String res = triangulo.verificaEscaleno(lado1, lado2, lado3);
        assertEquals("O triangulo e ESCALENO", res);
    }

    @Test
    public void verificarEquilatero(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 4;
        int lado2 = 4;
        int lado3 = 4;
        String res = triangulo.verificaEquilatero(lado1, lado2, lado3);
        assertEquals("O triangulo e EQUILATERO", res);
    }

    @Test
    public void LadoZero(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 0;
        int lado2 = 4;
        int lado3 = 4;
        String res = triangulo.valorZero(lado1, lado2, lado3);
        assertEquals("Triangulo invalido, alguns dos lados sao zero", res);
    }
    @Test
    public void LadoNegativo(){
        Triangulo triangulo = new Triangulo();
        int lado1 = -4;
        int lado2 = 1;
        int lado3 = 4;
        String res = triangulo.valorNegativo(lado1, lado2, lado3);
        assertEquals("Um dos lados tem valor Negativo", res);
    }

    @Test
    public void LadosZero(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 0;
        int lado2 = 0;
        int lado3 = 0;
        String res = triangulo.valorZero(lado1, lado2, lado3);
        assertEquals("Todos os lados são iguais a zero", res);
    }

    @Test
    public void VerificaInteiro(){
        Triangulo triangulo = new Triangulo();
        double lado1 = 2.5;
        double lado2 = 2.0;
        double lado3 = 1.9;
        String res = triangulo.verificaInteiro(lado1, lado2, lado3);
        assertEquals("Valores invalidos, so sao permitidos valores inteiros", res);
    }

    @Test
    public void somaDoisIgualTerceiro(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 1;
        int lado2 = 2;
        int lado3 = 3;
        String res = triangulo.SomaDoisIgualTerceiro(lado1, lado2, lado3);
        assertEquals("A soma de dois lados é menor que o terceiro lado", res);
    }

    @Test
    public void permutacaoEscaleno(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 1;
        int lado2 = 2;
        int lado3 = 3;
        String res = triangulo.verificaEscaleno(lado1, lado2, lado3);
        assertEquals("Nao e possivel fazer um triangulo com esses valores, a soma de dois valores da o mesmo que o outro", res);
    }

    @Test
    public void permutacaoIsoceles(){
        Triangulo triangulo = new Triangulo();
        int lado1 = 1;
        int lado2 = 3;
        int lado3 = 3;
        String res = triangulo.permutacao1(lado1, lado2, lado3);
        assertEquals("Seu triangulo e Isosceles", res);
    }

    @Test
    public void doisValores(){
        Triangulo triangulo = new Triangulo();
        Integer lado1 = 2;
        Integer lado2 = 1;
        Integer lado3 = null;
        String res = triangulo.doisValores(lado1, lado2, lado3);
        assertEquals("Um dos lados nao foi declarado", res);
    }

}