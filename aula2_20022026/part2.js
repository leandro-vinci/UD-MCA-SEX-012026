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