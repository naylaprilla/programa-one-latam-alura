import { Conta } from "./Conta/Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0 // é um atributo que vai ser usado em outros objetos
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1 // referente ao static
    }

    //esta sobreescrevendo a classe mae ou vai chamar o específico e não a classe pai
    sacar(valor) { //nessa regra o usuario não pode retirar mais do que já está depositado na conta
        let taxa = 1.1
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
    }
    
}