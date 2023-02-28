//para resolver el problema generado en el archivo anterior
//podemos declarar que tipo de dato retornará la funcion,
//dependiendo del tipo de dato que se ingrese.
export function parseStr(input: string): string[]; //si recibe string retorna array
export function parseStr(input: string[]): string; //si recibe array retorna string

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // retorna string
  } else {
    return input.split(''); // retorna array de strings
  }
}

const rtaArray = parseStr('Lila');
console.log('Lila =>', rtaArray);

const rtaString = parseStr(['L', 'i', 'l', 'a']);
console.log("['L', 'i', 'l', 'a'] =>", rtaString);

//El problema que se presenta en la situación anterior, es que en caso de querer usar métodos
//correspondientes a el tipo de dato esperado en el output será necesario hacer una verificación.
//Esto es porque TS entiende que la función puede devolver tanto un strig como un array,
//pero no puede asegurarte cual de los dos va a devolver, por lo que la respuesta tiene que ser
//evaluada antes de aplicarle métodos.
