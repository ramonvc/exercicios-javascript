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

function definirLivro2(nome, ano, autor) {

    return {
        nome: nome.toUpperCase(),
        idade: new Date().getFullYear() - ano,
        por: nome + ' por ' + autor
    }

}


let livro = definirLivro2('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livro.por);
