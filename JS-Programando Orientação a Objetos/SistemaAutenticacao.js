// Ser autenticavel significa ter o metodo autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehautenticavel(autenticavel)){
            
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehautenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }


    /* export class SistemaAutenticacao{
        static login(autenticavel, senha){
            return autenticavel.senha == senha
        } */
}