//parseStr es una funcion que transforma su input a otro tipo de dato.
// recibe string => retorna array
// recibe array => retorna string
//El problema que se presenta, es que en caso de querer usar métodos
//correspondientes a el tipo de dato esperado en el output será necesario hacer una verificación.
//Esto es porque TS entiende que la función puede devolver tanto un strig como un array,
//pero no puede asegurarte cual de los dos va a devolver
//por lo que la respuesta tiene que ser evaluada antes de aplicarle métodos.

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // devuelve string
  } else {
    return input.split(''); // devuelve array de strings
  }
}

const rtaArray = parseStr('Lila');
//rtaArray.reverse()  no se puede, primero debemos asegurarnos que el output sea array.
//verificación:
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('Lila =>', rtaArray);

let rtaString = parseStr(['L', 'i', 'l', 'a']);
//rtaStr.toLowerCase()  no se puede, primero debemos asegurarnos que el output sea string.
if (typeof rtaString == 'string') {
  rtaString = rtaString.toUpperCase();
}
console.log("['L', 'i', 'l', 'a'] =>", rtaString);

//En el archivo 08-overload-solution vemos como solucionarlo.
