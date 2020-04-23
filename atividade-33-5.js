// Crie uma função que receba uma quantidade variável de números e depois soma todos
// eles. Use o rest operator.


function soma_rest(...numeros) {
    return numeros[0] + numeros[1];
  }

console.log(soma_rest(5,5))