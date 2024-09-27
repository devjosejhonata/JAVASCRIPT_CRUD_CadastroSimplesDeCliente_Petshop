
import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]'); // Seleciona o formulário

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    // Extrai os valores dos campos do formulário
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;

    // Chama a função para criar um cliente
    clienteService.criaCliente(nome, email).then(() => {
        window.location.href = '../telas/cadastro_concluido.html'; // Redireciona para a página de sucesso após criação
    });
});
