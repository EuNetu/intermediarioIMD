"use strict";
class ContaCorrente {
    setNome(nome) {
        this.nome_correntista = nome;
    }
    setCpf(cpf) {
        this.cpf_correntista = cpf;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    depositar(deposito) {
        this.saldo += deposito;
    }
    sacar(saque) {
        this.saldo -= saque;
    }
    mostrarInformacoes() {
        console.log(`O nome do correntista é: ${this.nome_correntista} \nseu CPF: ${this.cpf_correntista} \nseu saldo é: ${this.saldo}`);
    }
}

let c = new ContaCorrente();
c.setNome("Neto");
c.setCpf("071.999.999-02");
c.setSaldo(33000);

c.depositar(5900);
c.sacar(900);

c.mostrarInformacoes();

// class ContaCorrente {
//     nome_correntista!: String;
//     cpf_correntista!: String;
//     saldo!: number;

//     setNome(nome:String):void{
//         this.nome_correntista = nome
//     }

//     setCpf(cpf: String){
//         this.cpf_correntista = cpf
//     }

//     setSaldo(saldo:number){
//         this.saldo = saldo
//     }

//     depositar(deposito:number){
//         this.saldo += deposito
//     }

//     sacar(saque:number){
//         this.saldo -= saque
//     }
//     mostrarInformacoes(){
//         console.log(`o nome do correntista é: ${this.nome_correntista} \nseu CPF: ${this.cpf_correntista} \nseu saldo é: ${this.saldo}`)
//     }
// }

// let c = new ContaCorrente()

// c.setNome("Neto")
// c.setCpf("071.999.999-02")
// c.setSaldo(33000)

// c.depositar(5900)
// c.sacar(900)

// c.mostrarInformacoes()