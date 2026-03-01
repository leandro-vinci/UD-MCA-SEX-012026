// Sergio:

let itemColecionador = {
    nome: 'Castelo de Lego',
    cor: 'Multicolorido',
    preco: 3500.00,
    estoque: 12
};


// A. Como acessar o nome do objeto?
console.log("A) Nome do objeto:", itemColecionador.nome);

// B. Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", itemColecionador['preco']);

// C. Atualize o estoque para 80.
itemColecionador.estoque = 80;
console.log("C) Estoque atualizado para:", itemColecionador.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Todas as propriedades do objeto:");
console.log(itemColecionador);



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
