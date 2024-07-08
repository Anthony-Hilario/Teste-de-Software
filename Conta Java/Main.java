import java.util.Scanner; //biblioteca para entrada de dados.

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Usuarios usuario = new Usuarios();
        int selecao = 0;
        Conta c = new Conta();
        Conta conta = new Conta(1,1, 100.00F,"Fisica");
        Conta conta2 = new Conta(2,1,50.00F,"Fisica");

        while (selecao != 5) {
            System.out.println("Selecione uma opcao:\n " +
                    "1-Depositar \n " +
                    "2-Sacar \n " +
                    "3-Saldo \n " +
                    "4-Transferir \n" +
                    "5-Sair");
            selecao = scan.nextInt();

            switch (selecao) {
                case 1:
                    int valorDeposito;
                    System.out.println("Digite o valor do deposito: ");
                    valorDeposito = scan.nextInt();

                    conta.Depositar(valorDeposito);
                    System.out.println("Saldo apos DEPOSITO: " + conta.saldoConta);
                    break;
                case 2:
                    int valorSaque;
                    System.out.println("Digite o valor do saque: ");
                    valorSaque = scan.nextInt();

                    conta.Saque(valorSaque);
                    System.out.println("Saldo apos SAQUE" + conta.saldoConta);
                    break;
                case 3:
                    System.out.println(conta.VerificarSaldo());
                    break;
                case 4:
                    System.out.println("Digite o valor que deseja transferir");
                    double valor = scan.nextFloat();

                    if(conta.getNumConta()==conta2.getNumConta()){
                        if(conta.Transferencia((float) valor)){
                            conta2.Depositar((float) valor);
                            System.out.println("Transferencia Realizada com Sucesso");
                        }
                    }
                    break;
                case 5:
                    System.out.println("Saindo..");
                    break;
                default:
                    System.out.println("Opcao inexistente.");
                    break;
            }
        }
    }
}
