const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo =
        `<td class="td" data-td>${nome}</td>
            <td>${email}</td>
                <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>` 

    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}

listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    
    })    

})





/* XMLHttpRequest + Promisse
    const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest()
        
        //abrir a comunicação entre a aplicação e a API
        http.open('GET', 'http://localhost:3000/profile') // está pedindo a requisição
                
        //o que vai ser feito depois que requisição for feita
        http.onload = () => {
            if(http.status >= 400){
                reject( JSON.parse(http.response) )
            } else {
                resolve( JSON.parse(http.response) )
            }
        }
        http.send() // está enviando a requisição
    })
    return promise
}

listaClientes()

.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    
    })    

}) */






//const data = JSON.parse(http.response) // transforma em elemento JS válido

