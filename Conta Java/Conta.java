public class Conta {
    int numConta, agencia;
    float saldoConta;
    String tipoConta;

    public Conta(){
    }

    public Conta(int numConta, int agencia, float saldoConta, String tipoConta) {
        this.numConta = numConta;
        this.agencia = agencia;
        this.saldoConta = saldoConta;
        this.tipoConta = tipoConta;
    }

    public String VerificarSaldo(){
        return "Seu saldo e: " + saldoConta;
    }

    public String Saque(float valor){
        if (valor < saldoConta){
            return "Saldo insuficiente";
        } else {
            saldoConta -= valor;
            return "Saque realizado";
        }
    }

    public String Depositar(float valor){
        if (valor > 0){
            saldoConta += valor;
            return "Deposito realizado com sucesso";
        } else {
            return "Valor de deposito invalido";
        }
    }

    public boolean Transferencia(float valor){
        if (valor <= 0){
            System.out.println("Digite um valor valido");
            return false;
        }
        else if(valor > saldoConta) {
            System.out.println("Saldo insuficiente");
            return false;
        }
        saldoConta -= valor;
        return true;
    }

    public int getNumConta() {
        return numConta;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        this.agencia = agencia;
    }

    public float getSaldoConta() {
        return saldoConta;
    }

    public void setSaldoConta(float saldoConta) {
        this.saldoConta = saldoConta;
    }

    public String getTipoConta() {
        return tipoConta;
    }

    public void setTipoConta(String tipoConta) {
        this.tipoConta = tipoConta;
    }




}
