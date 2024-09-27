
import { clienteService } from '../service/cliente-service.js';

// Execução imediata
(async () => {
    const pegaURL = new URL(window.location); // Obtém a URL atual
    const id = pegaURL.searchParams.get('id'); // Extrai o ID do cliente da URL

    // Seleciona os campos do formulário
    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        // Tenta obter os dados do cliente
        const dados = await clienteService.detalhaCliente(id);
        inputNome.value = dados.nome; // Preenche o campo nome
        inputEmail.value = dados.email; // Preenche o campo email
    } catch (erro) {
        console.log(erro); 
        window.location.href = '../telas/erro.html'; // Redireciona para a página de erro
    }

    const formulario = document.querySelector('[data-form]'); // Seleciona o formulário

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            // Tenta atualizar o cliente
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value);
            window.location.href = "../telas/edicao_concluida.html"; // Redireciona para a página de sucesso
        } catch (erro) {
            console.log(erro); 
            window.location.href = '../telas/erro.html'; // Redireciona para a página de erro
        }
    });
})();
