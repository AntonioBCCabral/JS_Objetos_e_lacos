// sistema_estoque_livraria.js
// Sistema simples de gerenciamento de estoque de uma livraria no terminal

const readline = require("readline");

// Interface para entrada/saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Estrutura de dados para armazenar os livros
let estoque = [];

// Função para exibir o menu
function mostrarMenu() {
    console.log("\n=== Sistema de Estoque da Livraria ===");
    console.log("1. Adicionar livro");
    console.log("2. Remover livro");
    console.log("3. Atualizar quantidade");
    console.log("4. Listar livros");
    console.log("5. Sair");
    rl.question("Escolha uma opção: ", tratarOpcao);
}

// Função para tratar a escolha do usuário
function tratarOpcao(opcao) {
    switch (opcao.trim()) {
        case "1":
            adicionarLivro();
            break;
        case "2":
            removerLivro();
            break;
        case "3":
            atualizarQuantidade();
            break;
        case "4":
            listarLivros();
            break;
        case "5":
            console.log("Encerrando o sistema...");
            rl.close();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            mostrarMenu();
    }
}

// Função para adicionar um livro
function adicionarLivro() {
    rl.question("Título do livro: ", (titulo) => {
        if (!titulo.trim()) {
            console.log("O título não pode ser vazio.");
            return mostrarMenu();
        }
    rl.question("Autor(a) do livro: ", (autor) => {
        if (!autor.trim()) {
            console.log("O autor não pode ser vazio.");
            return mostrarMenu();
            }
        rl.question("Quantidade: ", (qtd) => {
            let quantidade = parseInt(qtd);
            if (isNaN(quantidade) || quantidade < 0) {
                console.log("Quantidade inválida.");
                return mostrarMenu();
            }
            estoque.push({ titulo, autor, quantidade });
            console.log(`Livro "${titulo}" adicionado com sucesso!`);
            mostrarMenu();
        });
    });
    });
}

// Função para remover um livro
function removerLivro() {
    rl.question("Título do livro a remover: ", (titulo) => {
        let index = estoque.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (index === -1) {
            console.log("Livro não encontrado.");
        } else {
            estoque.splice(index, 1);
            console.log(`Livro "${titulo}" removido com sucesso!`);
        }
        mostrarMenu();
    });
}

// Função para atualizar a quantidade de um livro
function atualizarQuantidade() {
    rl.question("Título do livro: ", (titulo) => {
        let livro = estoque.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
        if (!livro) {
            console.log("Livro não encontrado.");
            return mostrarMenu();
        }
        rl.question("Nova quantidade: ", (qtd) => {
            let quantidade = parseInt(qtd);
            if (isNaN(quantidade) || quantidade < 0) {
                console.log("Quantidade inválida.");
                return mostrarMenu();
            }
            livro.quantidade = quantidade;
            console.log(`Quantidade do livro "${livro.titulo}" atualizada para ${quantidade}.`);
            mostrarMenu();
        });
    });
}

// Função para listar todos os livros
function listarLivros() {
    if (estoque.length === 0) {
        console.log("Nenhum livro no estoque.");
    } else {
        console.log("\n📚 Livros disponíveis:");
        estoque.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - Autor(a): ${livro.autor} - Quantidade: ${livro.quantidade}`);
        });
    }
    mostrarMenu();
}

// Iniciar o sistema
mostrarMenu();

