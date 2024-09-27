
import { clienteService } from '../service/cliente-service.js'; // Importa o serviço de cliente

// Função para criar uma nova linha na tabela de clientes
const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr'); // Cria um novo elemento de linha

    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
    `;

    linhaNovoCliente.innerHTML = conteudo; // Define o conteúdo da linha
    linhaNovoCliente.dataset.id = id; // Atribui o ID ao dataset da linha
    
    return linhaNovoCliente; // Retorna a nova linha criada
}

const tabela = document.querySelector('[data-tabela]'); // Seleciona a tabela

// Adiciona um evento de clique na tabela
tabela.addEventListener('click', async (evento) => {

    let ehBotaoDeletar = evento.target.classList.contains('botao-simples--excluir'); // Verifica se o botão clicado é o de excluir

    if (ehBotaoDeletar) {
        try {
            const linhaCliente = evento.target.closest('[data-id]'); // Encontra a linha do cliente correspondente

            let id = linhaCliente.dataset.id; // Obtém o ID do cliente
            
            await clienteService.removeCliente(id); // Chama a função para remover o cliente
            
            linhaCliente.remove(); // Remove a linha da tabela

        } catch (erro) {
            console.log(erro); 

            window.location.href = '../telas/erro.html'; // Redireciona para a página de erro
        }
    }
});

// Função para renderizar a lista de clientes
const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes(); // Obtém a lista de clientes
        
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)); // Adiciona cada cliente na tabela
        });
    } catch (erro) {
        console.log(erro); 
        window.location.href = '../telas/erro.html'; // Redireciona para a página de erro
    }
}

render(); // Chama a função para renderizar a lista de clientes
