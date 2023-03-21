//import {Cliente} from './Conta/Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'
import { Cliente } from './Cliente.js'


const diretor = new Diretor('Rodrigo', 10000, 12345678921)
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Ricardo',  5000, 12345678901)
gerente.cadastrarSenha('123')

const cliente = new Cliente('Lais', 78945612379, '456')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456')

console.log(gerenteEstaLogado, diretorEstaLogado)
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456')








/* import {ContaCorrente} from './Conta/ContaCorrente.js'
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { ContaSalario } from './Conta/ContaSalario.js'

// está chamando o contructor
const cliente1 = new Cliente('Ricardo', 11122233309) 

const contaCorrenteRicardo = new ContaCorrente(0, 1001, cliente1)
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario) */










