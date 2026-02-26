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

