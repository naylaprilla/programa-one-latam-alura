// O fetch substitui ambos XMLHttpRequest + Promisse 
const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
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
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover um clientes')
        }
    })
}

const detalhaCliente = (id)=> {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }) 
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar um cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
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

