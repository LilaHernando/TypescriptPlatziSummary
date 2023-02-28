// Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento
// del array así como la cantidad de elementos y su posición.

//Hasta el momento sabemos que para crear un array tipado tenemos que definirlo de esta manera:
const prices: (number | string)[] = [1, 2, 3, 4, 1, 2, 3, 4, 'hola'];
//ahora el array prices puede contener tanto numeros como strings en todas sus posiciones.
prices.push(5);
prices.push('chau');

// Para controlar el tipo de dato, la posicion del mismo y la cantidad de elementos de un array
//es necesario definir una Tupla de esta manera:

let user: [string, number];
//definimos entonces que la primera posicion es un string, la segunda es un number
//y solo puede contener 2 elementos.

// user = [] falla dado que si o si debe contener dos elementos.
// user = ['lila', 24, 24] falla por el mismo motivo
// user = ['Lila', '24']; falla dado que el segundo elemento debe ser un numero.
user = ['lila', 24]; //unica estructura correcta.
//podemos desestructurar una Tupla para acceder solo a los datos que necesitamos.
const [username] = user;
console.log(username);
//tambien accederlas con brackets notation
console.log(user[0]);

//Utilizando el Optional Chaining le damos a la tupla la posibilidad de recibir o no un argumento específico.
let user2: [number, string, string?] = [24, 'Lila', 'Bergamini'];
console.log(user2); // [24, 'Lila', 'Bergamini'];

user2 = [24, 'Lila'];
console.log(user2); // [24, 'Lila'];
