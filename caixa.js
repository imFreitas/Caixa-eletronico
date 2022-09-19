var saldo = 100; //Var saldo Global, usuario começa com a conta vazia;

document.write("SENHA") // senha 3589
var nome = prompt("Insira seu nome:");

alert("Olá, " + nome + ", É um prazer ter você por aqui!!");

function inicio_caixa(){
   
    let opcao = parseInt(prompt("Insira a opçao desejada: \n 1). Saldo \n 2). Extrato \n 3). Saque \n 4). Deposito \n 5). Tranferencia \n 6). Sair"));
    
    if(isNaN(opcao) || opcao == ''){

        alert("Insira um valor válido");
        inicio_caixa();

    }
    //Opções de login 
    switch(opcao){

        case 1:

           verificar_senha();
           ver_saldo();
           inicio_caixa();
           
        case 2:

            verificar_senha();
            ver_extrato();
            inicio_caixa();
            
        case 3: 

            verificar_senha();
            fazer_saque();
            inicio_caixa();
            
        case 4:

            verificar_senha();
            fazer_deposito();
            inicio_caixa();
        
        case 5:

            verificar_senha();
            fazer_transferencia();
            inicio_caixa();
        
        case 6: 

            sair_caixa();

        default:

            if(opcao > 6){ // Não rodar o código caso o número for maior que 6 ou alguma letra.

                alert("Opção Invalida, insira uma opção de 1 a 6");

            }
    }

}

inicio_caixa();

function ver_saldo(){

    alert("Seu saldo atual é: " + saldo);

}

function fazer_saque(){
            
    if(saldo <= 0){

        alert("Sua conta não possui saldo, faça um deposito para possuir saldo na conta");

    }else{

        let saque = parseFloat(prompt("Insira o valor que deseja sacar"));

        if(saque > saldo){

            alert("Você não possui este valor para saque, seu saldo é de: " + saldo + ". Faça a retirada de um valor menor do que seu saldo.");
            inicio_caixa();
    
        }
        if(isNaN(saque) || saque == ''){

            alert("Insira um valor válido");
            fazer_saque();

        }

        saldo -= saque;
        alert("Saque efetuado");

    }

    ver_saldo();

}

function fazer_deposito(){

    let deposito = parseFloat(prompt("Insira a quantidade que deseja depositar"));

    if(isNaN(deposito) || deposito == ''){

        alert("Insira um valor válido");
        fazer_deposito();

    }else if(deposito <= 0){

        alert("Operação Não Autorizada");
        alert("Valor de Deposito Invalido");
        inicio_caixa();

    }else{

        saldo += deposito;
        alert("Deposito efetuado")
        ver_saldo();

    }

}

function fazer_transferencia(){

    let conta = parseInt(prompt("Insira o numero da conta"));

    if(isNaN(conta) || conta == ''){

        alert("Insira o numero de uma conta válida para efetuar a transferência");
        fazer_transferencia();

    }

    let trans = parseFloat(prompt("Insira o valor para transferir"));

    if(isNaN(trans) || trans == ''){

        alert("Insira um valor valido para efetuar a transferência");
        fazer_transferencia();

    }else if (trans > saldo){

        alert("Operação Não Autorizada");
        alert("Você não possui saldo para realizar essa transferência");
        inicio_caixa();

    }else{

        saldo -= trans;
        alert("Transferência efetuada");
        ver_saldo();

    }


}

function ver_extrato(){

    alert("Compra realizada em 01/09/2022 - Nike - Pagamento Realizado no crédito no Valor de: R$ 559,99 \n Compra realizada em 05/09/2022 - Cinemark - Pagamento Realizado no Crédito no Valor de: R$ 18,00 \n Compra realizada em 10/09/2022 - Artwalk - Pagamento Realizado no Débito no Valor de: R$ 749,99 \n Compra realizada em 18/09/2022 - Mercado - Pagamento Realizado no Débito no Valor de: R$ 1000,00");

}

function sair_caixa(){

    let sair = confirm("Deseja sair do Caixa ?");

    if(sair){

        window.close();

    }else{

        inicio_caixa();

    }

}

function verificar_senha(){

    let senha = 3589;

    let userSenha = parseInt(prompt("Insira a senha para continuar"));

    if(isNaN(userSenha) || userSenha == ''){

        alert("Insira um valor válido para senha, somente números");
        verificar_senha();

    }else if (userSenha != senha){

        alert("Senha Invalida, tente novamente");
        verificar_senha();

    }else{

        alert("Estamos te encaminhando para operação");

    }
    
}