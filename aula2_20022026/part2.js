//Leandro:

let produto = {
    nome: 'Teclado',
    cor: 'Preto',
    preco: 149.90,
    estoque: 50
};

// A. Acessar o nome do objeto
console.log("Nome:", produto.nome);

// B. Acessar o preço usando colchetes
console.log("Preço:", produto['preco']);

// C. Atualizar o estoque para 80
produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);

// D. Imprimir todas as propriedades no console
for (let propriedade in produto) {
    console.log(propriedade + ":", produto[propriedade]);
}
