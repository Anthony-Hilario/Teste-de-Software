import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ContaTest {
    @Test
    public void verificarSaque(){
        System.out.println("Testando saque");
        Conta c = new Conta();
        double saque = 50.00;
        String resultado = c.Saque((float) saque);
        assertEquals("Saque realizado", resultado); //assertEquals(o que se espera, o que retornou)
    }

    @Test
    public void verificarDeposito(){
        System.out.println("Testando deposito com valor acima de 0");
        double deposito = 20.00;
        Conta c = new Conta();
        String resultado = c.Depositar((float) deposito);
        assertEquals("Deposito realizado com sucesso",resultado);
    }
}