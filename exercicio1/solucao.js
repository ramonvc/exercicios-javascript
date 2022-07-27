function definirLivro(nome, ano, autor) {
    ano_atual = new Date().getFullYear();

    const nome_maisculo = nome.toUpperCase();
    const idade = ano_atual - ano;
    const por = nome + ' por ' + autor;

    return {
        nome: nome_maisculo,
        idade,
        por
    }

}


let livro = definirLivro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livro.por);
