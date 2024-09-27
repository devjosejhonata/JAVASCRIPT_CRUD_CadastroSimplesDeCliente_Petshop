
// Função para listar todos os clientes
const listaClientes = () => {

    // Realiza uma requisição para a API
    return fetch(`http://localhost:3000/profile`).then(resposta => {

            // Verifica se a resposta foi bem-sucedida
            if (!resposta.ok) {
                throw new Error(`Erro ao listar clientes: ${resposta.statusText}`); // Lança um erro se a resposta não for ok
            }
            return resposta.json(); // Converte a resposta em JSON
        });
}

// Função para criar um novo cliente
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json' // Define o tipo de conteúdo
        }, 
        body: JSON.stringify({
            nome: nome, 
            email: email // Envia os dados do cliente em formato JSON
        })
    }).then(resposta => {

        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro ao criar cliente: ${resposta.statusText}`); // Lança um erro se a resposta não for ok
        }
        return resposta.json(); // Converte a resposta em JSON
    });
}

// Função para remover um cliente
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method:'DELETE' // Método DELETE para remover o cliente
    }).then(resposta => {

        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro ao remover cliente: ${resposta.statusText}`); // Lança um erro se a resposta não for ok
        }
    });
}

// Função para detalhar um cliente específico
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {

            // Verifica se a resposta foi bem-sucedida
            if (!resposta.ok) {
                throw new Error(`Erro ao detalhar cliente: ${resposta.statusText}`); // Lança um erro se a resposta não for ok
            }
            return resposta.json(); // Converte a resposta em JSON
        });
}

// Função para atualizar os dados de um cliente
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type' : 'application/json' // Define o tipo de conteúdo
        }, 
        body: JSON.stringify({// Envia os dados atualizados em formato JSON
            nome: nome, 
            email: email 
        })
    }).then(resposta => {
        
        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro ao atualizar cliente: ${resposta.statusText}`); // Lança um erro se a resposta não for ok
        }
        return resposta.json(); // Converte a resposta em JSON
    });
}

// Exporta as funções do clienteService
export const clienteService = {
    listaClientes, 
    criaCliente, 
    removeCliente, 
    detalhaCliente, 
    atualizaCliente
}
