export class Cliente {
    get cpf(){ // não permite que o cpf seja alterado
        return this._cpf
    }

    constructor(nome, cpf, senha) {
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }

}
