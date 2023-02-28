//Contamos con una propiedad llamada ReadonlyArray, que nos inhabilita la modificación
//del array al que se lo aplique, dejandolo de solo lectura.

const numbers1: number[] = [1, 2, 3, 4, 5];
numbers1.push(9);
numbers1.pop();
numbers1.unshift(1);

const numbers2: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers2.push(9);     //|
// numbers2.pop();       //|  --→ Descomentar para ver error
// numbers2.unshift(1);  //|

//ahora solo podemos interactuar con el array mediante metodos de modificación indirecta,
//como el filter, map o reduce, que crean un array nuevo con los resultados.
