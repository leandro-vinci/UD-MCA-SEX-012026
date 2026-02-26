Leandro:

let frutas = [
    'Maçã', 'Banana', 'Laranja', 'Uva', 'Manga',
    'Abacaxi', 'Morango', 'Kiwi', 'Pera', 'Melancia',
    'Limão', 'Cereja', 'Ameixa', 'Goiaba', 'Mamão',
    'Maracujá', 'Caju', 'Figo', 'Tangerina', 'Carambola',
    'Framboesa'
];

// A. Elementos nas posições específicas
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B. Penúltima e última posição
console.log("Penúltima posição:", frutas[frutas.length - 2]);
console.log("Última posição:", frutas[frutas.length - 1]);

// C. Quantidade de elementos
console.log("Total de elementos:", frutas.length);

// D. Adicionando novo elemento
frutas.push("Pitaya");
console.log("Novo total após adicionar:", frutas.length);

// E. Imprimindo todos os elementos com for
for (let i = 0; i < frutas.length; i++) {
    console.log("Elemento na posição", i, ":", frutas[i]);