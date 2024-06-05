const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//.concat - serve para juntar arrays
//const junta = a1.concat(a2, [7, 8, 9], 'Diogo');
///... rest / ... spread 

//...spread - utilizando os 3 pontos para espalhar os arrays dentro de um novo
const a3 = [...a1, 'Diogo', ...a2, ...[7, 8, 9]];
console.log(a3)