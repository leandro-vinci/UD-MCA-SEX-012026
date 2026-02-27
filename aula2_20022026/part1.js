let elementosMagicos = [
    'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 
    'Severus Snape', 'Rubeus Hagrid', 'Lord Voldemort', 'Draco Malfoy', 
    'Sirius Black', 'Remus Lupin', 'Minerva McGonagall', 'Bellatrix Lestrange', 
    'Neville Longbottom', 'Luna Lovegood', 'Ginny Weasley', 'Dobby', 
    'Edwiges', 'Expresso de Hogwarts', 'Pomo de Ouro', 'Chapéu Seletor', 
    'Mapa do Maroto'
];
    

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A) Posição 0:", elementosMagicos[0]);
console.log("A) Posição 7:", elementosMagicos[7]);
console.log("A) Posição 11:", elementosMagicos[11]);
console.log("A) Posição 15:", elementosMagicos[15]);
console.log("A) Posição 18:", elementosMagicos[18]);
console.log("A) Posição 20:", elementosMagicos[20]);

// B. Qual elemento está na penúltima e última posição?
console.log("B) Penúltima posição:", elementosMagicos[elementosMagicos.length - 2]);
console.log("B) Última posição:", elementosMagicos[elementosMagicos.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Quantidade de elementos:", elementosMagicos.length);

// D. Adicione um novo elemento ao final do array.
elementosMagicos.push('Varinha das Varinhas');
console.log("D) Novo elemento adicionado ao final:", elementosMagicos[elementosMagicos.length - 1]);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos:");
for (let i = 0; i < elementosMagicos.length; i++) {
    console.log(`${i}: ${elementosMagicos[i]}`);
}