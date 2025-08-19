// Filtre o array. Crie uma função chamada filterArray que recebe um Array
// de números como parâmetro de entrada. Essa função deve eliminar
// todos os números negativos e devolver o array apenas com valores 0
// e/ou números positivos.

// Exemplo:
// [1, -2, 0, 5, 8, -3] -> [1, 0, 5, 8]

// function filterPositiveNumbers(array) {
//   const positivos = array.filter((array) => array >= 0);
//   return positivos;
// }

function filterPositiveNumbers(array) {
  let PositiveNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      PositiveNumbers.push(array[i]);
     ;
    }
  }
   return PositiveNumbers
}

filterPositiveNumbers([1, -2, 0, 5, 8, -3]);

// ________________________ TEST ________________________
console.log("TEST:");
function compareArrays(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}
if (compareArrays(filterPositiveNumbers([1, -2, 0, 5, 8, -3]), [1, 0, 5, 8])) {
  console.log("✅ passed");
} else {
  console.log("❌ failed");
}
// ________________________ TEST ________________________
