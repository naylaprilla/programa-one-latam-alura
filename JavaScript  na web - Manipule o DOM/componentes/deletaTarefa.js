const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta

}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target //pega o evento

    const tarefaCompleta = botaoDeleta.parentElement //pega o elemento pai

    tarefaCompleta.remove()

    return botaoDeleta
}

export default BotaoDeleta
