// Sergio:

let catalogoCursosLivros = [
    { nome: 'Curso de Python para Automação', preco: 199.90, estoque: 50 },
    { nome: 'Livro de Inteligência Artificial', preco: 85.00, estoque: 120 },
    { nome: 'Curso de Gestão Financeira', preco: 250.00, estoque: 40 },
    { nome: 'Livro de Machine Learning', preco: 110.50, estoque: 75 },
    { nome: 'Planilha de Capital de Giro', preco: 29.90, estoque: 300 },
    { nome: 'Curso de SQL e Banco de Dados', preco: 150.00, estoque: 60 },
    { nome: 'E-book de Análise de Dados', preco: 45.00, estoque: 200 },
    { nome: 'Mentoria de Carreira em Tech', preco: 500.00, estoque: 10 },
    { nome: 'Livro de Lógica de Programação', preco: 60.00, estoque: 90 },
    { nome: 'Curso de Power BI Avançado', preco: 300.00, estoque: 35 }
];


// A. Qual é o preço do segundo objeto? (Lembrando que o índice 1 é o segundo)
console.log("A) Preço do segundo objeto:", catalogoCursosLivros[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2 é o terceiro)
console.log("B) Nome do terceiro objeto:", catalogoCursosLivros[2].nome);

// C. Quantos itens existem no array?
console.log("C) Quantidade de itens no array:", catalogoCursosLivros.length);

// D. Imprima o nome de todos os objetos.
console.log("D) Nome de todos os objetos:");
for (let i = 0; i < catalogoCursosLivros.length; i++) {
    console.log(catalogoCursosLivros[i].nome);
}

// E. Some o total de estoque de todos os objetos.
let totalEstoqueCursos = 0;
for (let i = 0; i < catalogoCursosLivros.length; i++) {
    totalEstoqueCursos += catalogoCursosLivros[i].estoque;
}
console.log("E) Soma total do estoque:", totalEstoqueCursos);

// F. Qual objeto possui maior estoque?
let cursoMaiorEstoque = catalogoCursosLivros[0]; 
for (let i = 1; i < catalogoCursosLivros.length; i++) {
    if (catalogoCursosLivros[i].estoque > cursoMaiorEstoque.estoque) {
        cursoMaiorEstoque = catalogoCursosLivros[i];
    }
}
console.log("F) Objeto com maior estoque:", cursoMaiorEstoque.nome, "com", cursoMaiorEstoque.estoque, "unidades.");




//Leandro:

let produtos = [
    { nome: 'Teclado', preco: 120, estoque: 30 },
    { nome: 'Mouse', preco: 80, estoque: 50 },
    { nome: 'Monitor', preco: 900, estoque: 15 },
    { nome: 'Headset', preco: 250, estoque: 40 },
    { nome: 'Webcam', preco: 180, estoque: 25 },
    { nome: 'Notebook', preco: 3500, estoque: 10 },
    { nome: 'Cadeira Gamer', preco: 1200, estoque: 8 },
    { nome: 'Mousepad', preco: 60, estoque: 70 },
    { nome: 'SSD', preco: 400, estoque: 22 },
    { nome: 'Microfone', preco: 300, estoque: 18 }
];

// A. Preço do segundo objeto
console.log("Preço do segundo objeto:", produtos[1].preco);

// B. Nome do terceiro objeto
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C. Quantidade de itens no array
console.log("Total de itens:", produtos.length);

// D. Imprimir nome de todos os objetos
for (let i = 0; i < produtos.length; i++) {
    console.log("Produto:", produtos[i].nome);
}

// E. Somar o total de estoque
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

// F. Objeto com maior estoque
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = produtos[i];
    }
}

console.log("Produto com maior estoque:", maiorEstoque);

