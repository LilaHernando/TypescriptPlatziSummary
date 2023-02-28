//En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función
//o indicar si no se devolverá dato alguno (void)
//El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

//Void: funciones sin retorno
//Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno.
//Estas son conocidas como funciones de tipo void. Se definen así:

//function imprimirNombre(yourName: string): void {
//console.log(`Hello ${yourName}`);
//}
//Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  };
  //También los retornos pueden ser más de un tipo de dato: (): number | string

  const rta = calcTotal([1, 2, 1, 1, 1]);
})();
