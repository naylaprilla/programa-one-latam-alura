// O fetch substitui ambos XMLHttpRequest + Promisse 
const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        
    })
    .then( resposta => {
        return resposta.body
    })
}

export const clienteService = {
    listaClientes,
    criaCliente
}



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

