// Classe Abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia

        if(this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata.')
        }
    }


    set cliente(novoValor){ 
        if(novoValor instanceof Cliente) // de instancia  || repsonsável pelo auto import
        this._cliente = novoValor
    }

    get cliente(){
        return this._cliente
    }

    get saldo() {
        return this._saldo // transforma a propridade para leitura apenas
    }

            // Método abastrado - serve para se herdado, mas deve ter uma modificação na classe específica
    sacar(valor) { 
        throw new Error('O método Sacar da conta é abstrato')
        
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
    }

    depositar(valor) {
        if(valor <= 0) return // quando tem uma unica linha depois do if não é necessário o uso das chaves 
        this._saldo += valor   
    }

                // let é uma cópia da variavel || const é um objeto de referencia
    transferir(valor, conta) {
        conta.cidade = "São Paulo" // Adiciona um novo atributo dinamicamente
        const valorSacado = this.sacar(valor) // tira da minha conta
        conta.depositar(valorSacado) // para depositar nessa outra conta
        valor = 20
    }

}